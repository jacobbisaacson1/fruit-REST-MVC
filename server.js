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
  res.send(fruits)
})


// get information about just one particular fruit
// need a URL parameter we can use to identify the fruit we want to work with
// we'll use the array index

// this is the fruits ---> "show" <--- route -- meaning it 
// gives us info about JUST ONE fruit
// show route will always have a URL parameter
app.get('/fruits/:id', (req, res) => {
  // console.log("\nreq.params:");
  // console.log(req.params);
  // // the id in req.params will correspond 
  // const indexOfFruit = req.params.id
  // const fruitToSendBack = fruits[indexOfFruit] // access in fruits array above
  // res.send(fruitToSendBack)

  // res.send(fruits[req.params.id]) // the above code all in one line

  const fruit = fruits[req.params.id]

  // we could make the output of this route nicer
  // by inserting the values into some HTML
  res.send(`
    <h1>${fruit.name}</h1>
    <p>Color: ${fruit.color}</p>
    <p>Ready to eat? ${fruit.readyToEat}</p>
  `)

})



app.listen(3000, () => {
  console.log("Server running on port 3000");
})