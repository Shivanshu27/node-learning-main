const EventEmitter = require("events");

const event = new EventEmitter();

// Register an event listener for the 'sayMyName' event
event.on("sayMyName", () => {
    console.log("your name is Vinod");
});

// Register another event listener for the 'sayMyName' event
event.on("sayMyName", () => {
    console.log("your name is Vinod thapa");
});

// Emit the 'sayMyName' event
event.emit("sayMyName");

// Explanation:
// The EventEmitter class is used to create and handle custom events in Node.js.
// The 'on' method is used to register an event listener for a specific event.
// The 'emit' method is used to trigger an event, causing all registered listeners for that event to be called in the order they were registered.
// In this example, two listeners are registered for the 'sayMyName' event. When the event is emitted, both listeners are called in sequence.

// Unsubscribing from an event

// Register an event listener for the 'sayHello' event
const sayHelloListener = () => {
    console.log("Hello!");
};

event.on("sayHello", sayHelloListener);

// Emit the 'sayHello' event
event.emit("sayHello"); // Output: Hello!

// Remove the event listener for the 'sayHello' event
event.off("sayHello", sayHelloListener);

// Emit the 'sayHello' event again
event.emit("sayHello"); // No output

// Explanation:
// The 'off' method (or 'removeListener' method) is used to unsubscribe from an event.
// It removes a specific listener from the event, so it will no longer be called when the event is emitted.
// In this example, the 'sayHelloListener' is removed from the 'sayHello' event, so it is not called when the event is emitted again.