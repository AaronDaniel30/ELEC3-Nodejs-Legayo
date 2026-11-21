
/*
Name: Aaron Daniel A. Legayo
Section: BSIT IV-C
Activity: N2 - Modular Calculator
Date: November 21, 2026
*/

function formatResult(operation, numbers, result) {
    if (operation === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    const symbol = symbols[operation];

    return `${numbers[0]} ${symbol} ${numbers[1]} = ${result}`;
}

module.exports = { formatResult };
