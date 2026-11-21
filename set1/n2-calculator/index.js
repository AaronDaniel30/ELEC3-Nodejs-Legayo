
/*
Name: Aaron Daniel A. Legayo
Section: BSIT IV-C
Activity: N2 - Modular Calculator
Date: November 21, 2026
*/

const os = require("os");
const operations = require("./operations");
const { formatResult } = require("./formatter");

const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

console.log("===== MODULAR CALCULATOR =====");
console.log("Operating System:", os.platform());

try {
    if (!operation) {
        throw new Error("Please specify an operation.");
    }

    if (numbers.length === 0 || numbers.some(Number.isNaN)) {
        throw new Error("Please provide valid numbers.");
    }

    let result;

    switch (operation) {
        case "add":
            if (numbers.length !== 2) throw new Error("Add requires two numbers.");
            result = operations.add(numbers[0], numbers[1]);
            break;

        case "subtract":
            if (numbers.length !== 2) throw new Error("Subtract requires two numbers.");
            result = operations.subtract(numbers[0], numbers[1]);
            break;

        case "multiply":
            if (numbers.length !== 2) throw new Error("Multiply requires two numbers.");
            result = operations.multiply(numbers[0], numbers[1]);
            break;

        case "divide":
            if (numbers.length !== 2) throw new Error("Divide requires two numbers.");
            result = operations.divide(numbers[0], numbers[1]);
            break;

        case "average":
            result = operations.average(numbers);
            break;

        default:
            throw new Error("Unknown operation. Use add, subtract, multiply, divide, or average.");
    }

    console.log(formatResult(operation, numbers, result));

} catch (error) {
    console.log("Error:", error.message);
}
