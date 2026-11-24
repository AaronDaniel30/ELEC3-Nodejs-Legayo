# ELEC 3 – Node.js Programming Activities

**Name:** Aaron Daniel Legayo  
**Section:** IV-BSIT  
**Course:** ELEC 3 – Node.js Programming

## Activities

| Activity | Description | Folder |
|---|---|---|
| N1 – Project Setup | Node.js project initialization and npm package management. | [N1 Folder](set1/n1-setup/) |
| N2 – Modular Calculator | A command-line calculator using custom JavaScript modules. | [N2 Folder](set1/n2-calculator/) |
| N3 – File Manager | A command-line program for creating, reading, updating, deleting, and listing text files. | [N3 Folder](set1/n3-file-manager/) |
| N4 – Basic HTTP Server | A basic HTTP server with page routing and 404 error handling. | [N4 Folder](set2/n4-server/) |
| N5 – REST-style API | A REST-style student API that supports CRUD operations using an array for storage. | [N5 Folder](set2/n5-api/) |

## Activity Details

### N1 – Project Setup and Package Management

**Description:** Initialized a Node.js project, installed npm packages, and configured package.json scripts and dependencies.

**How to run:**

Run these commands inside `set1/n1-setup`:

```bash
npm install
npm start
```

**Screenshots:**

![Node.js and npm Versions](set1/n1-setup/screenshots/1_versions.png)

![N1 npm Start Output](set1/n1-setup/screenshots/2_npm_start.png)

![N1 Package JSON](set1/n1-setup/screenshots/3_package_json.png)

### N2 – Modular Calculator

**Description:** Created a command-line calculator using custom modules for mathematical operations and result formatting.

**How to run:**

Run these commands inside `set1/n2-calculator`:

```bash
node index.js add 12 8
node index.js subtract 12 8
node index.js multiply 12 8
node index.js divide 12 8
node index.js average 10 20 30
node index.js divide 12 0
node index.js modulo 12 8
```

**Screenshots:**

![Mathematics Operations](set1/n2-calculator/screenshots/calculator_operations.png)

### N3 – File Manager

**Description:** Created a command-line file manager using Node.js modules to create, read, update, delete, and list text files.

**How to run:**

Run these commands inside `set1/n3-file-manager`:

```bash
node index.js create notes.txt "This is my first note."
node index.js read notes.txt
node index.js update notes.txt " Updated content."
node index.js delete notes.txt
node index.js list
```

**Screenshots:**

![File Manager Operations](set1/n3-file-manager/screenshots/file_operations.png)

![File Manager File List](set1/n3-file-manager/screenshots/file_list.png)

### N4 – Basic HTTP Server

**Description:** Created a basic HTTP server using Node.js's built-in HTTP module. The server handles the home, about, and contact pages and displays a 404 error for unknown routes.

**How to run:**

Run this command from the project root:

```bash
node set2/n4-server/index.js
```

Open the server in your browser:

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

### N5 – REST-style API

**Description:** Created a REST-style API using Node.js's built-in HTTP module. It manages student records using an array without a database and supports Create, Read, Update, and Delete (CRUD) operations.

**How to run:**

Run this command from the project root:

```bash
node set2/n5-api/index.js
```

The API runs at:

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