const express = require('express')
const app = express()


// import our Model(s)/Data from our models folder
const fruits = require('./models/fruits.js')


app.get('/', (req, res) => {
  // fun stuff: you can res.send html with values inserted into it
  const today = new Date()
  res.send(`
    <h1>Hello! This is the Fruit app</h1>
    <p>Thanks for using our site</p>
    <p>${today}</p>
  `)
})


// we are going to let users CRUD all data relating to fruits
// each route that lets users CRUD fruits will with /fruits
// the path will begin with /fruits -- ALWAYS USE PLURAL NOUNS

// this is the fruits -----> "index" route <-------- meaning it
// lists ALL the fruits
app.get('/fruits', (req, res) => {
  // ex. modify this route to render an index.ejs template
  // in the index.ejs template, use a for loop to print a sentence about each fruit.

  res.render('index.ejs', { fruits: fruits })
})


// get information about just one particular fruit
// need a URL parameter we can use to identify the fruit we want to work with
// we'll use the array index

// this is the fruits ---> "show" <--- route -- meaning it 
// gives us info about JUST ONE fruit
// show route will always have a URL parameter
app.get('/fruits/:id', (req, res) => {

  const fruit = fruits[req.params.id]

  // render a template
  // we RENDER templates using res.render

  // res.render() takes 2 arguments
  // the first argument is the template to render
  // it will automatically look in the views folder
  // the argument is just path to the template from within the views folder

  // the second argument is an object containing data to be inserted 
  // in the template
  // the keys in the object will be variables that you can access in EJS
  res.render('show.ejs', { 
    message: "Hi how are you fine thanks",
    fruit: fruit
  })

})



app.listen(3000, () => {
  console.log("Server running on port 3000");
})