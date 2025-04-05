// Timer functions in Node.js are used to schedule the execution of code at a future point in time.

// Function to add two numbers and log the result
function add(a, b) {
    console.log(a + b);
}

// setImmediate schedules a callback to be executed in the Check phase of the event loop
setImmediate(() => {
    add(2, 3);
    console.log("this is setImmediate");
});

// setTimeout schedules a callback to be executed after a minimum delay (0ms in this case)
setTimeout(() => {
    add(3, 4);
    console.log("this is setTimeout");
}, 0);

// process.nextTick schedules a callback to be executed in the next iteration of the event loop, before any I/O
process.nextTick(() => {
    add(4, 5);
    console.log("this is next tick");
});



// Explanation:
// 'Start' is logged first because it's a synchronous operation.
// process.nextTick is executed before any I/O operations, so 'this is next tick' is logged next.
// setTimeout and setImmediate are scheduled to run in the next iteration of the event loop.
// The order of setTimeout and setImmediate can vary, but typically setTimeout is executed before setImmediate.


// Another example to demonstrate the phases of the event loop

console.log('Start');

// I/O Polling Phase
const fs = require('fs');
fs.readFile(__filename, () => {
    console.log('File read callback (Poll phase)');
    
    // Schedule a setImmediate inside the I/O callback
    setImmediate(() => {
      console.log('Immediate callback (Check phase)');
    });
});

// Timers Phase
setTimeout(() => {
  console.log('Timeout callback');
}, 0);

// Check Phase
setImmediate(() => {
  console.log('Immediate callback');
});

process.nextTick(() => {
  console.log('this is next tick');
}
);

console.log('End');

// Explanation:
// 'Start' and 'End' are logged first because they are synchronous operations.
// The readFile callback is executed in the Poll phase of the event loop.
// Inside the readFile callback, setImmediate is scheduled to run in the Check phase.
// setTimeout and setImmediate are scheduled to run in the next iteration of the event loop.
// The order of setTimeout and setImmediate can vary, but typically setTimeout is executed before setImmediate.
// The output order will be:
// Start
// End
// this is next tick
// Timeout callback
// Immediate callback
// File read callback (Poll phase)
// Immediate callback (Check phase)