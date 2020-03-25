const express = require('express')
const app = express()


// we are going to use this array to "pretend" that we have a database
// this is our "Fruit" data
const fruits = ['apple', 'banana', 'pear']



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
app.get('/fruits', (req, res) => {
  res.send(fruits)
})



app.listen(3000, () => {
  console.log("Server running on port 3000");
})