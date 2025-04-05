// Difference between `for` and `forEach`:

// 1. Syntax:
// `for` loop:
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// `forEach` method:
array.forEach(element => {
    console.log(element);
});

// 2. Usage:
// `for` loop:
// - A traditional loop that can be used to iterate over arrays, objects, or any iterable.
// - Provides more control over the iteration process (e.g., you can break out of the loop using `break` or skip an iteration using `continue`).
// - Can be used to iterate in reverse or with a custom step size.

// `forEach` method:
// - A higher-order function that is specifically designed for iterating over arrays.
// - Automatically provides the current element and index to the callback function.
// - Cannot be used to break out of the loop or skip iterations (no `break` or `continue`).

// 3. Performance:
// `for` loop:
// - Generally faster than `forEach` because it is a simple loop with less overhead.

// `forEach` method:
// - Slightly slower due to the overhead of calling a function for each element.

// 4. Readability:
// `for` loop:
// - Can be more verbose and less readable, especially for simple iterations.

// `forEach` method:
// - More concise and readable for simple iterations over arrays.

// 5. When to Use:
// Use `for` loop:
// - When you need more control over the iteration process (e.g., breaking out of the loop, skipping iterations, iterating in reverse).
// - When performance is critical and you need the fastest possible iteration.

// Use `forEach` method:
// - When you want a more concise and readable way to iterate over arrays.
// - When you don't need to break out of the loop or skip iterations.

const array1 = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) continue; // Skip the element 3
    console.log(array[i]);
}

// Using forEach method
array.forEach(element => {
    if (element === 3) return; // This will not skip the element 3
    console.log(element);
});

// Explanation: async/await with forEach
// It is correct that async/await does not work as expected with forEach.
// The forEach method does not wait for promises to resolve, so using async/await inside forEach will not work as intended.

async function asyncFunction(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Processed ${num}`);
            resolve();
        }, 1000);
    });
}

// This will not work as expected
array.forEach(async (num) => {
    await asyncFunction(num);
    console.log(`Finished processing ${num}`);
});

// Explanation:
// The forEach method does not wait for the asyncFunction to complete before moving to the next iteration.
// As a result, the console.log statements will not be in the expected order.

// Correct way to use async/await with a loop
async function processArray(array) {
    for (const num of array) {
        await asyncFunction(num);
        console.log(`Finished processing ${num}`);
    }
}

processArray(array);

// Explanation:
// Using a for...of loop with async/await ensures that each iteration waits for the asyncFunction to complete before moving to the next iteration.
// This way, the console.log statements will be in the expected order.










// Difference between Arrow Functions and Regular Functions:

// 1. Syntax:
// Arrow Function:
const arrowFunction = (param1, param2) => {
    return param1 + param2;
};

// Regular Function:
function regularFunction(param1, param2) {
    return param1 + param2;
}

// 2. `this` Context:
// Arrow Function:
// - Does not have its own `this` context.
// - Inherits `this` from the surrounding lexical scope.

const obj1 = {
    value: 10,
    arrowFunc: () => {
        console.log(this.value); // undefined, `this` refers to the global object
    }
};

obj1.arrowFunc();

// Regular Function:
// - Has its own `this` context.
// - `this` refers to the object that called the function.

const obj2 = {
    value: 10,
    regularFunc: function() {
        console.log(this.value); // 10, `this` refers to obj2
    }
};

obj2.regularFunc();

// 3. Arguments Object:
// Arrow Function:
// - Does not have its own `arguments` object.
// - Use rest parameters (...) to access arguments.

const arrowFuncWithArgs = (...args) => {
    console.log(args);
};

arrowFuncWithArgs(1, 2, 3); // [1, 2, 3]

// Regular Function:
// - Has its own `arguments` object.

function regularFuncWithArgs() {
    console.log(arguments);
}

regularFuncWithArgs(1, 2, 3); // [1, 2, 3]

// 4. Constructor:
// Arrow Function:
// - Cannot be used as a constructor.
// - Throws an error if used with `new`.

const ArrowConstructor = () => {};
// const instance = new ArrowConstructor(); // Error: ArrowConstructor is not a constructor

// Regular Function:
// - Can be used as a constructor.

function RegularConstructor() {}
const instance = new RegularConstructor(); // Works fine

// 5. Lexical Scope:
// Arrow Function:
// - Inherits `this` from the surrounding lexical scope.
// - Useful for maintaining the correct `this` context in callbacks and event handlers.

function LexicalScopeExample() {
    this.value = 42;

    setTimeout(() => {
        console.log(this.value); // 42, `this` refers to LexicalScopeExample instance
    }, 1000);
}

const example = new LexicalScopeExample();

// Regular Function:
// - Has its own `this` context, which can lead to issues in callbacks and event handlers.

function NonLexicalScopeExample() {
    this.value = 42;

    setTimeout(function() {
        console.log(this.value); // undefined, `this` refers to the global object
    }, 1000);
}

const example2 = new NonLexicalScopeExample();

// When to Use:
// Use Arrow Functions:
// - When you need to maintain the `this` context from the surrounding lexical scope.
// - For concise syntax, especially for small functions and callbacks.
// - When you don't need a constructor or the `arguments` object.

// Use Regular Functions:
// - When you need a function with its own `this` context.
// - When you need to use the `arguments` object.
// - When you need a constructor function.













// Difference between `splice` and `slice`:

// 1. Purpose:
// `splice`:
// - Used to add, remove, or replace elements in an array.
// - Modifies the original array.

// `slice`:
// - Used to create a shallow copy of a portion of an array.
// - Does not modify the original array.

// 2. Syntax:
// `splice`:
// array.splice(start, deleteCount, item1, item2, ...)

// `slice`:
// array.slice(start, end)

// 3. Parameters:
// `splice`:
// - start: The index at which to start changing the array.
// - deleteCount: The number of elements to remove from the array.
// - item1, item2, ...: The elements to add to the array (optional).

// `slice`:
// - start: The beginning index of the portion to extract (inclusive).
// - end: The ending index of the portion to extract (exclusive).

// 4. Return Value:
// `splice`:
// - Returns an array containing the deleted elements.

// `slice`:
// - Returns a new array containing the extracted elements.

const array = [1, 2, 3, 4, 5];

// Using splice to remove elements
const removedElements = array.splice(2, 2);
console.log(array); // [1, 2, 5]
console.log(removedElements); // [3, 4]

// Using splice to add elements
array.splice(2, 0, 3, 4);
console.log(array); // [1, 2, 3, 4, 5]

// Using slice to create a shallow copy
const newArray = array.slice(1, 3);
console.log(newArray); // [2, 3]
console.log(array); // [1, 2, 3, 4, 5]

// Explanation:
// The splice method is used to modify the original array by adding, removing, or replacing elements.
// The slice method is used to create a shallow copy of a portion of the array without modifying the original array.










// Difference between `null`, `undefined`, and `new`:

// 1. `null`:
// - Represents the intentional absence of any object value.
// - It is an assignment value that can be assigned to a variable to represent no value.

let a = null;
console.log(a); // null

// 2. `undefined`:
// - Represents the absence of a value or an uninitialized variable.
// - It is the default value of variables that have not been assigned a value.

let b;
console.log(b); // undefined

// 3. `new`:
// - The `new` keyword is used to create an instance of an object that has a constructor function.
// - It initializes the newly created object and sets up its prototype chain.

function Person(name) {
    this.name = name;
}

const person = new Person("John");
console.log(person.name); // John

// Explanation:
// `null` is used to explicitly indicate the absence of a value.
// `undefined` is used to indicate that a variable has been declared but not yet assigned a value.
// `new` is used to create instances of objects using constructor functions.

// Example of `null`:
let exampleNull = null;
console.log(exampleNull); // null

// Example of `undefined`:
let exampleUndefined;
console.log(exampleUndefined); // undefined

// Example of `new`:
function Car(model) {
    this.model = model;
}

const myCar = new Car("Toyota");
console.log(myCar.model); // Toyota

// When to Use:
// Use `null`:
// - When you want to explicitly indicate that a variable should have no value.
// - To reset or clear a variable.

let data = { name: "Alice" };
data = null; // Clear the data object

// Use `undefined`:
// - When a variable has been declared but not yet assigned a value.
// - To check if a variable has not been initialized.

let value;
if (value === undefined) {
    console.log("Value is undefined");
}

// Use `new`:
// - When you need to create instances of objects using constructor functions or classes.

class Animal {
    constructor(type) {
        this.type = type;
    }
}

const myAnimal = new Animal("Dog");
console.log(myAnimal.type); // Dog
















// Generator Functions:

// What are Generator Functions?
// Generator functions are a special type of function that can be paused and resumed during execution.
// They are defined using the function* syntax and use the yield keyword to pause and resume execution.

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().done);  // true

// Explanation:
// The generatorFunction is a generator function that yields three values: 1, 2, and 3.
// The generator object is an iterator that can be used to iterate over the yielded values.
// The next method is used to resume the execution of the generator function and retrieve the next yielded value.
// The value property of the result object contains the yielded value, and the done property indicates whether the generator function has completed.

// Example of using a generator function to generate an infinite sequence of numbers
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const sequence = infiniteSequence();

console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2

// Explanation:
// The infiniteSequence generator function generates an infinite sequence of numbers starting from 0.
// The while (true) loop ensures that the generator function never completes, and the yield i++ statement yields the next number in the sequence.

// Example of using a generator function to iterate over an array
function* arrayIterator(array) {
    for (const item of array) {
        yield item;
    }
}

const array2 = [1, 2, 3, 4, 5];
const iterator = arrayIterator(array2);

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3

// Explanation:
// The arrayIterator generator function iterates over the elements of an array and yields each element.
// The for...of loop is used to iterate over the array, and the yield statement yields each element.

// When to Use Generator Functions:
// Use generator functions:
// - When you need to create an iterator that can be paused and resumed.
// - When you need to generate an infinite sequence of values.
// - When you need to implement custom iteration logic for a collection.













// JSONP (JSON with Padding):

// What is JSONP?
// JSONP is a technique used to overcome the same-origin policy in web browsers, allowing for cross-domain requests.
// It works by dynamically creating a <script> tag and setting its src attribute to the URL of the JSONP endpoint.
// The server responds with a JavaScript function call that includes the JSON data as an argument.

function handleResponse(data) {
    console.log(data);
}

const script = document.createElement('script');
script.src = 'https://example.com/data?callback=handleResponse';
document.body.appendChild(script);

// Explanation:
// The handleResponse function is defined to handle the JSON data returned by the server.
// A <script> tag is created and its src attribute is set to the URL of the JSONP endpoint, including the callback function name as a query parameter.
// The server responds with a script that calls the handleResponse function with the JSON data as an argument.













// Tools for Consistent Code Style in JavaScript:

// 1. ESLint:
// ESLint is a popular tool for identifying and fixing problems in JavaScript code.
// It enforces consistent code style and helps catch common errors.

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
};

// Explanation:
// The ESLint configuration file (usually named .eslintrc.js) specifies the environment, parser options, and rules for linting the code.
// In this example, the code is configured to use 4 spaces for indentation, double quotes for strings, and semicolons at the end of statements.

// 2. Prettier:
// Prettier is an opinionated code formatter that enforces a consistent code style by parsing and reformatting the code.

module.exports = {
    "printWidth": 80,
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": true
};

// Explanation:
// The Prettier configuration file (usually named .prettierrc.js) specifies the formatting options for the code.
// In this example, the code is configured to use a print width of 80 characters, 4 spaces for tabs, single quotes for strings, trailing commas where valid in ES5, and semicolons at the end of statements.
















// Optimization Methods in JavaScript:

// 1. Minification:
// Minification is the process of removing unnecessary characters from the code (such as whitespace, comments, and newlines) to reduce its size and improve load times.

const minifiedCode = "function add(a,b){return a+b;}";

// Explanation:
// Minification reduces the size of the code by removing unnecessary characters, making it faster to download and execute.

// 2. Code Splitting:
// Code splitting is a technique used to split the code into smaller chunks that can be loaded on demand, improving the initial load time of the application.

import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    document.body.appendChild(element);
});

// Explanation:
// Code splitting allows the application to load only the necessary code for the current page or feature, reducing the initial load time and improving performance.

// 3. Lazy Loading:
// Lazy loading is a technique used to defer the loading of non-critical resources until they are needed, improving the initial load time of the application.

const img = document.createElement('img');
img.src = 'placeholder.jpg';
img.dataset.src = 'actual-image.jpg';
img.classList.add('lazy');

const lazyLoad = () => {
    const lazyImages = document.querySelectorAll('.lazy');
    lazyImages.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        }
    });
};

window.addEventListener('scroll', lazyLoad);

// Explanation:
// Lazy loading defers the loading of images until they are in the viewport, reducing the initial load time and improving performance.

// 4. Debouncing and Throttling:
// Debouncing and throttling are techniques used to limit the rate at which a function is executed, improving performance by reducing the number of times the function is called.

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Explanation:
// Debouncing delays the execution of a function until a specified delay has passed since the last time it was called.
// Throttling limits the execution of a function to once every specified limit, regardless of how many times it is called.





