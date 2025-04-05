const fs= require('fs');

fs.writeFile("read.txt", "today is awesome day", (err)=>{console.log(err)});

fs.readFile("read.txt", "utf-8", (err, data)=>{
    console.log(err,data);
});

// fs.unlink("path", callback function)

// fs.rmdir("path", callback function)