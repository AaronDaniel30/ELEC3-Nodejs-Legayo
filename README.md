# ELEC 3 – Node.js Programming Activities

**Name:** Aaron Daniel Legayo  
**Section:** IV-BSIT  
**Course:** ELEC 3 – Node.js Programming

## Set 2 Activities

| Activity | Description | Folder |
|---|---|---|
| N4 – Basic HTTP Server | A basic HTTP server with page routing and 404 error handling. | [N4 Folder](set2/n4-server/) |
| N5 – REST-style API | A REST-style student API that supports CRUD operations using an array for storage. | [N5 Folder](set2/n5-api/) |
| N6 – Middleware and API Testing | Custom logger and JSON middleware with REST API testing using Postman. | [N6 Folder](set2/n6-middleware/) |

---

## N4 – Basic HTTP Server

**Description:** Created a basic HTTP server using Node.js's built-in HTTP module. The server handles the home, about, and contact pages and displays a 404 error for unknown routes.

**How to run:**

Run this command from the project root:

```bash
node set2/n4-server/index.js
```

**Server URL:**

```text
http://localhost:8000
```

**Available routes:**

- `/` – Home page
- `/about` – About page
- `/contact` – Contact page
- Other URLs – 404 Page not found

**Screenshots:**

![N4 Home Page](set2/n4-server/screenshots/home.png)

![N4 About Page](set2/n4-server/screenshots/about.png)

![N4 Contact Page](set2/n4-server/screenshots/contact.png)

![N4 404 Page](set2/n4-server/screenshots/404.png)

---

## N5 – REST-style API

**Description:** Created a REST-style API using Node.js's built-in HTTP module. It manages student records using an array without a database and supports Create, Read, Update, and Delete (CRUD) operations.

**How to run:**

```bash
node set2/n5-api/index.js
```

**Server URL:**

```text
http://localhost:8001
```

**Available endpoints:**

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Retrieve all students. |
| GET | `/api/students/:id` | Retrieve a student by ID. |
| POST | `/api/students` | Add a new student. |
| PUT | `/api/students/:id` | Update an existing student. |
| DELETE | `/api/students/:id` | Delete a student by ID. |

**Example POST request body:**

```json
{
  "name": "Ana Reyes",
  "course": "BSIT"
}
```

**Screenshots:**

![N5 Get All Students](set2/n5-api/screenshots/get-all-students.png)

![N5 Get Student by ID](set2/n5-api/screenshots/get-id1-student.png)

![N5 Add Student](set2/n5-api/screenshots/post-add-student.png)

![N5 Update Student](set2/n5-api/screenshots/put-update-student.png)

![N5 Delete Student](set2/n5-api/screenshots/delete-student.png)

![N5 Updated Students List](set2/n5-api/screenshots/updated-students-list.png)

---

## N6 – Middleware and API Testing

**Description:** Implemented custom logger and JSON middleware using Node.js. Tested all five REST API operations (GET, GET by ID, POST, PUT, and DELETE) using Postman.

**How to run:**

```bash
node set2/n6-middleware/index.js
```

**Server URL:**

```text
http://localhost:8002
```

**API Endpoints:**

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a student by ID |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

**Screenshots:**

**1. GET – All Students**

![GET All Students](set2/n6-middleware/screenshots/get-all-students.png)

**2. GET – Student by ID**

![GET Student by ID](set2/n6-middleware/screenshots/get-student-by-id.png)

**3. POST – Add Student**

![POST Add Student](set2/n6-middleware/screenshots/post-add-student.png)

**4. PUT – Update Student**

![PUT Update Student](set2/n6-middleware/screenshots/put-update-student.png)

**5. DELETE – Remove Student**

![DELETE Student](set2/n6-middleware/screenshots/delete-student.png)

**6. Middleware Logger Output**

![Middleware Logs](set2/n6-middleware/screenshots/middleware-logs.png)

**N6 Answers:**

[View N6 Answers](set2/n6-middleware/N6-answers.docx)
