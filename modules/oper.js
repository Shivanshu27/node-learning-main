// Define functions for basic arithmetic operations
const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mult = (a, b) => {
    return a * b;
}

// Export the functions using CommonJS syntax
module.exports = { add, sub, mult };

// Explanation:
// The module.exports object is used to export functions or variables from a module in CommonJS syntax.
// This allows other files to import and use these functions.

// ES6 import/export syntax
export { add, sub, mult };

// Explanation:
// The export statement is used to export functions or variables from a module in ES6 syntax.
// This allows other files to import and use these functions using the import statement.