
/*
Name: Aaron Daniel Legayo
Section: IV-BSIT
Activity: N4 - Basic HTTP Server
Date: November 24, 2026
*/

const http = require("http");

const server = http.createServer((req, res) => {
    // Home page
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Welcome to My Home Page</h1>
            <h2>Aaron Daniel Legayo</h2>
            <p>Section: IV-BSIT</p>
        `);
    }

    // About page
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>About Me</h1>
            <p>Hello! I am Aaron Daniel Legayo, a BSIT student.</p>
            <p>I am learning Node.js and web development.</p>
        `);
    }

    // Contact page
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Contact</h1>
            <p>You can contact me through my email.</p>
            <p>aarondaniellegayo30@gmail.com</p>
        `);
    }

    // Page not found
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page not found</h1>");
    }
});

// Start the server
server.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
});
