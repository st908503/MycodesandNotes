const fs  = require("fs");

/* read file using sync */
// const data = fs.readFileSync("read.txt" , "utf-8")
// console.log(data)
// console.log("sync read completed")

/* read file using async */
const data = fs.readFile("read.txt" , "utf-8" , (err,data) =>{
    console.log(data)
})
console.log("async read Completed") 
