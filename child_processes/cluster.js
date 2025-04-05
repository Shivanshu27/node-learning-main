const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require('os');

const numCpu = os.cpus().length;

app.get('/', (req, res) => {
    for (let i = 0; i < 1e8; i++) {
        // Simulate CPU-intensive work
    }
    res.send(`ok.. ${process.pid}`);
    // Remove the line that kills the worker process
    // cluster.worker.kill();
});

// Explanation:
// The app.get method defines a route handler for the root URL ('/').
// The for loop simulates a CPU-intensive task.
// The res.send method sends a response with the process ID of the worker handling the request.
// The cluster.worker.kill() line is commented out to allow the worker to handle multiple requests.

if (cluster.isMaster) {
    for (let i = 0; i < numCpu; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    app.listen(3000, () => console.log(`server ${process.pid} @localhost:3000`));
}

// Explanation:
// The cluster module is used to create a master process and multiple worker processes.
// The cluster.isMaster property is true for the master process and false for worker processes.
// The master process forks a worker process for each CPU core using cluster.fork().
// The cluster.on('exit') event listener forks a new worker when a worker dies, ensuring there are always numCpu workers running.
// The worker processes run the Express.js application and listen for incoming requests on port 3000.


// The Cluster Module in Node.js enables us to create multiple child processes (workers) that share the same server port, allowing us to utilize multiple CPU cores. This helps improve performance by distributing incoming requests across multiple worker processes.

// Why is the Cluster Module Used?
// Improves Performance: Spawns multiple worker processes to handle requests in parallel.
// Utilizes Multi-core Processors: Node.js is single-threaded by default, but clustering allows better CPU utilization.
// Ensures Fault Tolerance: If a worker crashes, a new one can be spawned.

// How Does the Cluster Module Work?
// There is a primary (master) process that spawns multiple worker processes.
// Each worker runs its own instance of the application.
// Requests are distributed among workers using round-robin (on Linux) or OS-dependent methods.



// Worker Threads Overview
// The worker_threads module allows creating multiple threads within a single Node.js process. Unlike the Cluster module, these threads share memory, making them useful for CPU-intensive tasks.

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    console.log(`Main thread: ${process.pid}`);

    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log(`Message from worker: ${msg}`));
    worker.postMessage('Hello from Main Thread');
} else {
    parentPort.on('message', (msg) => {
        console.log(`Worker received: ${msg}`);
        parentPort.postMessage('Hello from Worker Thread');
    });
}


// How is Cluster Different from Worker Threads?
// Feature	Cluster Module	Worker Threads
// Execution Model	Runs multiple processes	Runs multiple threads inside a single process
// Memory Usage	High (each process has its own memory)	Low (all threads share the same memory)
// Inter-process Communication (IPC)	Uses process.send() (slow)	Uses worker.postMessage() (faster)
// Best for	I/O-heavy tasks (handling multiple requests)	CPU-intensive tasks (parallel processing)



// When to Use Worker Threads?

// When dealing with CPU-intensive tasks (e.g., cryptography, image processing).
// When you need shared memory for efficient data handling.


// Summary:

// Use Cluster for scaling servers (handling many HTTP requests efficiently).
// Use Worker Threads for CPU-heavy processing (running parallel computations).



