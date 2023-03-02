const express = require('express')
const app = express();
const path = require('path');
const port = 3000

// const shashankMiddleware = (req,res,next)=>{ //my cerated middleware
//     console.log(req)
//     next() //to ensure next middlewwre also runs

// }
app.use(express.static(path.join(__dirname, "public")))
//app.use(shashankMiddleware) //my cerated middleware

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+ req.params.name)
})

app.get('/about', (req, res) => {
    //res.send('about Hello World!')
   // res.sendFile(path.join(__dirname,'index.html'))
    //res.status(500) //this code is for internal server error
    res.json({"Shasahank":24})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})