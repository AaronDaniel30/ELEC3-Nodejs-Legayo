
/*
Name: Aaron Daniel A. Legayo
Section: BSIT IV-C
Activity: N3 - File Manager
Date: November 21, 2026
*/

const path = require("path");

const FILES_DIR = path.join(__dirname, "files");

function getFilePath(filename) {
    const safeName = path.basename(filename);

    if (!safeName.endsWith(".txt")) {
        throw new Error("Only .txt files are allowed.");
    }

    return path.join(FILES_DIR, safeName);
}

function getFileDetails(filePath) {
    return {
        fullPath: filePath,
        filename: path.basename(filePath),
        extension: path.extname(filePath)
    };
}

module.exports = {
    FILES_DIR,
    getFilePath,
    getFileDetails
};
