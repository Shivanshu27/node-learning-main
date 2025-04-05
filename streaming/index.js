const fs= require("fs");

const http= require("http");

const server= http.createServer();

server.on("request", (req, res)=>{
    // fs.readFile("input.txt", (err, data)=> {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // }); 

    // const rstream= fs.createReadStream("input.txt");

    // rstream.on("data", (chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("end", ()=>{
    //     res.end();
    // });
    // rstream.on ("error", ()=> {
    //     console.log(err);
    //     res.end("file not found");
    // });

    // let data= "";
    // let writeStream= fs.createWriteStream("output.txt");
    // writeStream.write(data, 'utf-8');
    // writeStream.end()
    // writeStream.on("finish", function(){
    //     console.log("writing completed")
    // })

    // pipe method

    // const rstream= fs.createReadStream("input.txt");
    // rstream.pipe(res); 

    const rstream= fs.createReadStream("input.txt");
    const writeStream= fs.createWriteStream("output.txt");
    rstream.pipe(writeStream);

});

// create read and write stream and pipe so that it reads from input file in this dir and writes to output file in this dir

server.listen(8000, "127.0.0.1");



const fs = require('fs');
const readableStream = fs.createReadStream('file.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('No more data.');
});

// Explanation:
// A Readable stream is used to read data from a source. In this example, we create a readable stream from 'file.txt'.
// The 'data' event is emitted when a chunk of data is available to read.
// The 'end' event is emitted when there is no more data to read.

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, world!\n');
writableStream.write('Writing more data...\n');
writableStream.end('This is the end of the stream.');

// Explanation:
// A Writable stream is used to write data to a destination. In this example, we create a writable stream to 'output.txt'.
// The 'write' method is used to write data to the stream.
// The 'end' method is used to signal that no more data will be written to the stream.

const { Duplex } = require('stream');

const duplexStream = new Duplex({
  read(size) {
    this.push('Hello from read!\n');
    this.push(null); // No more data
  },
  write(chunk, encoding, callback) {
    console.log('Received chunk:', chunk.toString());
    callback();
  }
});

duplexStream.on('data', (chunk) => {
  console.log('Read chunk:', chunk.toString());
});

duplexStream.write('Hello from write!\n');
duplexStream.end();

// Explanation:
// A Duplex stream is both Readable and Writable. In this example, we create a duplex stream that can read and write data.
// The 'read' method is used to push data to the readable side of the stream.
// The 'write' method is used to handle data written to the writable side of the stream.

const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase()); // Convert data to uppercase
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);

// Explanation:
// A Transform stream is a type of Duplex stream where the output is computed based on the input.
// In this example, we create a transform stream that converts input data to uppercase.
// The 'transform' method is used to modify the data as it is written to the stream.
// We pipe the standard input (process.stdin) to the transform stream and then pipe the output to the standard output (process.stdout).

