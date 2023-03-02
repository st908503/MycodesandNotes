const express = require('express')
var exphbs = require('express-handlebars');

const path = require('path');
const app = express()
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname,'routes/blog.js')))


// app.get('/', (req, res) => {
//   res.sendFile('Hello World!'+ req.params.name)
// })

// app.get('/about', (req, res) => {
//     //res.send('about Hello World!')
//    // res.sendFile(path.join(__dirname,'index.html'))
//     //res.status(500) //this code is for internal server error
//     res.json({"Shasahank":24})
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})