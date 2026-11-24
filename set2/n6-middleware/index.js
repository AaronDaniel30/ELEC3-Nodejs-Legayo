
/*
Name: Aaron Daniel Legayo
Section: IV-BSIT
Activity: N6 - Middleware and API Testing
Date: November 24, 2026
*/

const http = require("http");

let students = [
    { id: 1, name: "Aaron Daniel Legayo", course: "BSIT" },
    { id: 2, name: "Adrian Romeo Manangan", course: "BSIT" },
    { id: 3, name: "Rhamsus Joshua Cagampan", course: "BSIT" }
];

// Middleware system
const middlewares = [];

function use(middleware) {
    middlewares.push(middleware);
}

function runMiddlewares(req, res, routeHandler) {
    let index = 0;

    function next() {
        const middleware = middlewares[index++];

        if (middleware) {
            middleware(req, res, next);
        } else {
            routeHandler(req, res);
        }
    }

    next();
}

// Middleware 1: Logger
function loggerMiddleware(req, res, next) {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleString()}`
    );

    next();
}

// Middleware 2: JSON Content-Type
function jsonMiddleware(req, res, next) {
    if (req.url.startsWith("/api/")) {
        res.setHeader("Content-Type", "application/json");
    }

    next();
}

// Register middlewares
use(loggerMiddleware);
use(jsonMiddleware);

// API routes
function handleRoutes(req, res) {
    const urlParts = req.url.split("/");
    const id = parseInt(urlParts[3]);

    // GET all students
    if (req.method === "GET" && req.url === "/api/students") {
        res.writeHead(200);
        res.end(JSON.stringify(students));
    }

    // GET student by ID
    else if (req.method === "GET" && urlParts[1] === "api" &&
             urlParts[2] === "students" && urlParts[3]) {
        const student = students.find(s => s.id === id);

        if (!student) {
            res.writeHead(404);
            return res.end(JSON.stringify({ message: "Student not found" }));
        }

        res.writeHead(200);
        res.end(JSON.stringify(student));
    }

    // POST - Add a student
    else if (req.method === "POST" && req.url === "/api/students") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newStudent = JSON.parse(body);
                newStudent.id = students.length > 0
                    ? Math.max(...students.map(s => s.id)) + 1
                    : 1;

                students.push(newStudent);

                res.writeHead(201);
                res.end(JSON.stringify(newStudent));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: "Invalid JSON data" }));
            }
        });
    }

    // PUT - Update a student
    else if (req.method === "PUT" && urlParts[1] === "api" &&
             urlParts[2] === "students" && urlParts[3]) {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const student = students.find(s => s.id === id);

            if (!student) {
                res.writeHead(404);
                return res.end(JSON.stringify({ message: "Student not found" }));
            }

            try {
                const updatedData = JSON.parse(body);
                student.name = updatedData.name ?? student.name;
                student.course = updatedData.course ?? student.course;

                res.writeHead(200);
                res.end(JSON.stringify(student));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: "Invalid JSON data" }));
            }
        });
    }

    // DELETE - Remove a student
    else if (req.method === "DELETE" && urlParts[1] === "api" &&
             urlParts[2] === "students" && urlParts[3]) {
        const studentIndex = students.findIndex(s => s.id === id);

        if (studentIndex === -1) {
            res.writeHead(404);
            return res.end(JSON.stringify({ message: "Student not found" }));
        }

        const deletedStudent = students.splice(studentIndex, 1)[0];

        res.writeHead(200);
        res.end(JSON.stringify({
            message: "Student deleted successfully",
            student: deletedStudent
        }));
    }

    // Unknown endpoint
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Endpoint not found" }));
    }
}

// Create server and run middlewares before routes
const server = http.createServer((req, res) => {
    runMiddlewares(req, res, handleRoutes);
});

server.listen(8002, () => {
    console.log("N6 API is running at http://localhost:8002");
});
