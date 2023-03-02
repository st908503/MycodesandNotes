const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs")//to use partials
const port = 8000

//Middleware
//const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, '../template')
const partialsPath = path.join(__dirname, '../template/partials')

//to set the view engine
app.set('view engine','hbs')
app.set('views', templatePath); /*this was important (folder name not compulsory 
to be views only we have used template name here)*/
hbs.registerPartials(partialsPath) // registering partial 



//app.use(express.static(staticPath)) // we want to fetch data dynamically using hbs so commenting this

//template engine route
app.get('/', (req,res)=>{
  res.render("index")
}) // this is getting rendered first than below request

app.get('/about', (req,res)=>{
  res.render("about")
})

app.get('/' , (req,res)=>{
  res.send("Hello for Static server")  
})

app.get('*', (req,res)=>{ // this condition has to be at bottom atways to give error for any error page
  res.render("404" , {
    errorcomponent : "oops page couldn't be found" // for displaying error for error pages

  })
})


app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
})

