const fs = require("fs");

const { fstat } = require("fs");

const bioData = {
    name: "shiv",
    age: 30,
};

const jsonData= JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
    const orgData= JSON.parse(data);
    console.log(orgData);

})
// const objData= JSON.parse(jsonData);

