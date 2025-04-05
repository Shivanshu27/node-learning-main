// What are Promises?
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
// They provide a way to handle asynchronous operations in a more synchronous-like fashion, avoiding callback hell.

// Types of Promises:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// Example of a simple promise
function promise() {
    return fetch('/data.json');
}

const result = promise().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

// Explanation:
// The fetch function returns a promise that resolves with the response of the request.
// The then method is used to handle the resolved value of the promise.
// The catch method is used to handle any errors that occur during the promise execution.

// Example of chaining promises
function fn(customPromise) {
    // return a new Promise which resolves to +1 of the resolved promise value
    return customPromise.then(result => {
        return result + 1;
    });
}

function fn(customPromise) {
    return customPromise.catch(() => {
        return 'error';
    });
}

// Example of a promise with setTimeout
function promiseSetTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hi");
            resolve();
            reject();
        }, 1000);
    });
}

promiseSetTimeout().then(() => {
    console.log("done");
});

// Example of a calculator function returning a promise
function calculator(num1, num2, operation) {
    // return a Promise
    return new Promise((resolve, reject) => {
        if (operation === '+') {
            resolve(num1 + num2);
        } else if (operation === '-') {
            resolve(num1 - num2);
        } else {
            reject('error');
        }
    });
}

// Example of Promise.all
function fn(...promises) {
    return Promise.all([...promises]).then((values) => values.map((value) => value * 2));
}

// Explanation:
// Promise.all takes an array of promises and returns a single promise that resolves when all of the promises have resolved.
// The resulting promise resolves with an array of the resolved values of the input promises.
// If any of the input promises reject, the returned promise immediately rejects with the reason of the first rejected promise.

// Example of Promise.allSettled
async function fn(...promises) {
    // resolve them all
    // add one to all of them
    let resolvedPromises = await Promise.allSettled(promises);
    console.log(resolvedPromises);
    return resolvedPromises.map(
        object => {
            if (object.status === "fulfilled") {
                return object.value * 2;
            } else {
                return null;
            }
        }
    );
}

// Explanation:
// Promise.allSettled takes an array of promises and returns a single promise that resolves when all of the promises have settled (either fulfilled or rejected).
// The resulting promise resolves with an array of objects that describe the outcome of each promise.
// This is useful when you want to know the outcome of all promises, regardless of whether they resolved or rejected.

// Example of a simple promise with resolve and reject
const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(function () {
        console.log("Promise resolved successfully");
    })
    .catch(function () {
        console.log("Promise is rejected");
    });

// Example of using async/await with a helper promise
const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
        const x = "geeksforgeeks";
        const y = "geeksforgeeks";
        if (x === y) {
            resolve("Strings are same");
        } else {
            reject("Strings are not same");
        }
    });

    return promise;
};

async function demoPromise() {
    try {
        let message = await helperPromise();
        console.log(message);
    } catch (error) {
        console.log("Error: " + error);
    }
}

demoPromise();

// Explanation:
// The async keyword is used to define an asynchronous function.
// The await keyword is used to wait for a promise to resolve or reject.
// Using async/await makes asynchronous code look and behave more like synchronous code, improving readability and maintainability.

// Example of setInterval
let counter = 0;

const myFunc = () => {
    console.log('Hello World');
    counter += 1;

    if (counter === 5) {
        console.log('Done');
        clearInterval(timerId);
    }
};

const timerId = setInterval(myFunc, 1000);

// Example of setTimeout
const myFunc1 = delay => {
    console.log('Hello after ' + delay + ' seconds');
};

setTimeout(myFunc1, 5 * 1000, 'five');
setTimeout(myFunc1, 10 * 1000, 'ten');
setTimeout(myFunc1, 15 * 1000, 'fifteen');

// Example of fetch with promises
fetch("").then((apidata) => {
    return apidata.json();
}).then((actualdata) => {
    console.log(actualdata);
}).catch(err => {
    console.log(err);
});

// Example of fetch with async/await
async function covidapi() {
    try {
        const jsondata = await fetch("");
        const jsdata = await jsondata.json();
        const country_name = jsdata.Countries[101];
        console.log(country_name);
    } catch (error) {
        console.log(`${error}`);
    }
}

// Explanation:
// The fetch function returns a promise that resolves with the response of the request.
// Using async/await with fetch allows us to write asynchronous code in a more synchronous-like manner, improving readability and maintainability.

// Example of using promises
function fetchData() {
    return fetch('/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched using promises:', data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchData();

// Explanation:
// The fetchData function uses promises to fetch data from '/data.json'.
// It handles the response and any errors using then and catch methods.
// This approach can lead to nested then calls, making the code harder to read and maintain.

// Example of using async/await
async function fetchDataAsync() {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched using async/await:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchDataAsync();

// Explanation:
// The fetchDataAsync function uses async/await to fetch data from '/data.json'.
// The async keyword is used to define an asynchronous function.
// The await keyword is used to wait for the fetch and response.json promises to resolve.
// This approach makes the code look and behave more like synchronous code, improving readability and maintainability.