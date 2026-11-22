
/*
Name: Aaron Daniel A. Legayo
Section: BSIT IV-C
Activity: N2 - Modular Calculator
Date: November 21, 2026
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

function average(numbers) {
    if (numbers.length === 0) {
        throw new Error("Please provide at least one number.");
    }

    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
