
/*
Name: Aaron Daniel A. Legayo
Section: BSIT IV-C
Activity: N3 - File Manager
Date: November 21, 2026
*/

const fs = require("fs");
const { FILES_DIR, getFilePath, getFileDetails } = require("./fileUtils");

function ensureFilesFolder() {
    if (!fs.existsSync(FILES_DIR)) {
        fs.mkdirSync(FILES_DIR, { recursive: true });
    }
}

function createFile(filename, content) {
    ensureFilesFolder();

    const filePath = getFilePath(filename);
    fs.writeFileSync(filePath, content, { flag: "wx" });

    console.log("File created successfully:", filename);
}

function readFile(filename) {
    const filePath = getFilePath(filename);
    const content = fs.readFileSync(filePath, "utf8");

    console.log("File contents:", content);
}

function updateFile(filename, content) {
    const filePath = getFilePath(filename);
    fs.writeFileSync(filePath, content);

    console.log("File updated successfully:", filename);
}

function deleteFile(filename) {
    const filePath = getFilePath(filename);
    fs.unlinkSync(filePath);

    console.log("File deleted successfully:", filename);
}

function listFiles() {
    ensureFilesFolder();

    const filenames = fs.readdirSync(FILES_DIR)
        .filter(filename => filename.endsWith(".txt"));

    if (filenames.length === 0) {
        console.log("No text files found.");
        return;
    }

    console.log("===== FILE MANAGER LIST =====");

    filenames.forEach(filename => {
        const filePath = getFilePath(filename);
        const details = getFileDetails(filePath);
        const content = fs.readFileSync(filePath, "utf8");

        console.log("\nFull Path:", details.fullPath);
        console.log("Filename:", details.filename);
        console.log("Extension:", details.extension);
        console.log("Contents:", content);
        console.log("-----------------------------");
    });
}

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    listFiles
};
