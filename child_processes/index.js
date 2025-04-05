// Child processes in Node.js allow you to run shell commands and other scripts from within a Node.js application.
// They are used to perform operations that are outside the scope of the Node.js runtime, such as executing system commands or running other programs.

// What Are Child Processes?
// A child process is a separate instance of a process created by a parent process. In Node.js, the child_process module allows you to create and control these processes, enabling parallel execution and better utilization of system resources.

// Why Are Child Processes Used?
// Parallel Execution: Running CPU-intensive tasks without blocking the event loop.
// Executing System Commands: Running shell commands like ls, grep, or curl.
// Inter-process Communication (IPC): Communication between processes using messages.
// Scaling Applications: Spawning multiple worker processes for better performance.


// spawn()
// Purpose: Used to execute a command as a child process.
// Non-blocking: Returns a ChildProcess instance that streams output.
// Best for: Long-running processes or handling large outputs.
// When to use spawn:

// When dealing with large outputs (since it uses streams).
// For long-running processes (like watching files, logging, etc.).

// fork()
// Purpose: Spawns a new Node.js process that runs a separate script.
// Best for: Running separate Node.js scripts while allowing communication via messages.

// When to use fork:

// When you need IPC (Inter-Process Communication) between parent and child processes.
// When running Node.js scripts in a separate process.


// Key Differences Between spawn and fork
// Feature	spawn	fork
// Execution  	Runs any command	    Runs a Node.js script
// Output    Handling	Uses streams for stdout/stderr	    Uses IPC (message passing)
// Blocking?	Non-blocking (handles large output efficiently)   	Non-blocking
// Best Use Case    	Running shell commands	        Running separate Node.js processes

// When to Use What?
// Use spawn when running external commands or system-level processes (e.g., ffmpeg, ls, curl).
// Use fork when you need to run a separate Node.js process and communicate with it.




// Example using exec
const { exec } = require('child_process');

exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Explanation:
// The exec function is used to run a shell command and buffer the output.
// It is suitable for commands that produce a small amount of output.
// In this example, the 'pwd' command is executed to print the current working directory.

// Example using execFile
const { execFile } = require('child_process');

execFile('./somefile.sh', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Explanation:
// The execFile function is used to run an executable file directly without using a shell.
// It is suitable for running scripts or binaries.
// In this example, a shell script 'somefile.sh' is executed.

// Example using spawn
const { spawn } = require('child_process');

const child = spawn('find', ['/']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

child.on('error', (error) => console.log(`error: ${error.message}`));

child.on('exit', (code, signal) => {
  if (code) console.log(`Process exit with code: ${code}`);
  if (signal) console.log(`Process killed with signal: ${signal}`);
  console.log(`Done ✅`);
});

// Explanation:
// The spawn function is used to launch a new process with a given command.
// It is suitable for commands that produce a large amount of output or need to run for a long time.
// In this example, the 'find' command is executed to search the root directory.

// Summary of child process types:
// 1. exec: Runs a command in a shell and buffers the output. Suitable for commands with small output.
// 2. execFile: Runs an executable file directly without a shell. Suitable for running scripts or binaries.
// 3. spawn: Launches a new process with a given command. Suitable for commands with large output or long-running processes.


