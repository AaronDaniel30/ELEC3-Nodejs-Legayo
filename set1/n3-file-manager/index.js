
/*
Name: Aaron Daniel A. Legayo
Section: BSIT IV-C
Activity: N3 - File Manager
Date: November 21, 2026
*/

const fileManager = require("./fileManager");

const args = process.argv.slice(2);
const command = args[0];
const filename = args[1];
const content = args.slice(2).join(" ");

console.log("===== NODE.JS FILE MANAGER =====");

try {
    switch (command) {
        case "create":
            if (!filename || !content) {
                throw new Error('Usage: node index.js create filename.txt "content"');
            }
            fileManager.createFile(filename, content);
            break;

        case "read":
            if (!filename) {
                throw new Error("Please provide a filename.");
            }
            fileManager.readFile(filename);
            break;

        case "update":
            if (!filename || !content) {
                throw new Error('Usage: node index.js update filename.txt "content"');
            }
            fileManager.updateFile(filename, content);
            break;

        case "delete":
            if (!filename) {
                throw new Error("Please provide a filename.");
            }
            fileManager.deleteFile(filename);
            break;

        case "list":
            fileManager.listFiles();
            break;

        default:
            throw new Error("Unknown command. Use create, read, update, delete, or list.");
    }

} catch (error) {
    console.log("Error:", error.message);
}
