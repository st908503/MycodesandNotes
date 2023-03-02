const express = require("express");
const app = express();
//const port = 8080

app.get("/" , (req,res)=>{
    res.write("<h1>Welcome to home page</h1>")
    res.write("<h1>Welcome to about page</h1>") //for multiple we use res.write
    res.send()//once all above response are done it will close the connection
})

app.get("/about" , (req,res)=>{
    res.send("Welcome to about page") 
})
// app.get("/contact" , (req,res)=>{
//     res.send([
//     {
//         name : "shashank",
//         number : "8319298374"
//     },
//     {
//         name : "shashank",
//         number : "8319298374"
//     }, {
//         name : "shashank",
//         number : "8319298374"
//     }]
//     ) // serving json data from object (converted to json behind the scene)
// })

app.get("/contact" , (req,res)=>{
    res.json([ /*same as above (res.send <=> res.json). If we use non-object then also res.json 
    convert it to json but res.send convert only array or object to json*/

    {
        name : "shashank",
        number : "8319298374"
    },
    {
        name : "shashank",
        number : "8319298374"
    }, {
        name : "shashank",
        number : "8319298374"
    }]
    ) // serving json data from object (converted to json behind the scene)
})

app.get("/temp" , (req,res)=>{
    res.status(200).send("Welcome to temperature page") // we can also write like this
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})