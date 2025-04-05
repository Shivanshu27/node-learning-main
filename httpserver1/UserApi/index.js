const http = require ('http');
const fs= require("fs");
// const { threadId } = require('worker_threads');

console.log(__dirname);

const server= http.createServer((req, res)=>{
    console.log("hi")
    const data= fs.readFileSync(`${__dirname}/userapi.json`, "utf8");
    
    const objData= JSON.parse(data);
    console.log(req.url);
    console.log(objData);
    if (req.url=="/"){
    res.end("hello from the other side");
    } else if (req.url== "/userapi") {
       res.writeHead(200, {'content-type': "application/json"});
       console.log(JSON.parse(data)[0].name);
       res.end(JSON.stringify(JSON.parse(data)[0]));  

    } else {
        res.writeHead(404, {"document-type": "text/html"});
        res.end("404 error,  page doesn't exist") //or
        // res.write("404 error,  page doesn't exist");
        // res.end();
    }
});

server.listen(3000,"127.0.0.1", ()=>{
    console.log('listening to port no. 3000')
})