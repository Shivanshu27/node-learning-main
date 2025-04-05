const fs= require("fs");

fs.writeFileSync("read.txt", "welcome to my channel");

console.log ("shiv");

// fs.appendFileSync();

// fs.mkdirSync("asyncOperations");

const data= fs.readFileSync("read.txt", "utf8");

console.log(data);
console.log(__dirname);

// fs.renameSync("name1","name2");

// fs.unlinkSync("path of file");
 
// data1= data.toString();


const os= require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());

// os.totalmem()
// os.freemem()



// console.log(data1);


function foo(x){
    if (x>10){
        return 2*x;
    }
    return x+10;
}

res= foo(11);
console.log(res);
