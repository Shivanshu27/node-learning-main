const http = require ('http');
const { threadId } = require('worker_threads');

const server= http.createServer((req, res)=>{
    // console.log(req.url);
    if (req.url=="/"){
    res.end("hello from the other side");
    } else {
        res.writeHead(404, {"document-type": "text/html"});
        res.end("404 error,  page doesn't exist")
    }
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log('listening to port no. 8000')
})