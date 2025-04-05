// Import functions using CommonJS syntax
const { add, sub, mult } = require("./oper");

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mult(5, 5));

// Explanation:
// The require function is used to import modules in CommonJS syntax.
// It reads the exported functions or variables from the specified module file.

// ES6 import syntax
import { add, sub, mult } from './oper.js';

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mult(5, 5));

// Explanation:
// The import statement is used to import modules in ES6 syntax.
// It reads the exported functions or variables from the specified module file.

// Differences between require and import:
// 1. Syntax: require is used in CommonJS modules, while import is used in ES6 modules.
// 2. Timing: require is synchronous and can be called conditionally, while import is asynchronous and hoisted to the top of the file.
// 3. Usage: require is commonly used in Node.js, while import is used in modern JavaScript (ES6) and supported by modern browsers and tools like Babel.

// Note: To use ES6 import/export syntax in Node.js, you may need to enable ES modules by setting "type": "module" in your package.json file or using a transpiler like Babel.


