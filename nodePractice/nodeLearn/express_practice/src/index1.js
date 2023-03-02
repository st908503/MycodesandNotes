/*
we create API using express :
get - read
post - create
put - update
delete - delete
*/


const express = require("express")
const path = require("path")
const app = express()

//relative path
//console.log(__dirname)

// console.log(path.join(__dirname,'../public')) //to check the path for static file folder ie public 
const staticPath = path.join(__dirname,'../public')

//Built-in middleware
app.use (express.static(staticPath))

app.get("/",(req,res)=>{ // '/' represents root page
    res.send("Hello")
})

app.get("/about",(req,res)=>{ 
    res.send("About Page")
})

// app.listen(8000, ()=>{
//     console.log("listening port at 8000")
// })