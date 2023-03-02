const http = require("http")

const server = http.createServer((req,res)=>{
    //console.log(req.url)
    if(req.url == '/'){
        res.end("this pages displays / content")
    }
    else if (req.url == '/about'){
        res.end("this pages displays /about content")
    }
    res.end("Hello Server");
})

server.listen(8000, "127.0.0.1" , ()=>{
    console.log("Listening to port number 8000")
})