const express = require('express')
const app = express()





app.get('/', (req, res) => {
  // fun stuff: you can res.send html with values inserted into it
  const today = new Date()
  res.send(`
    <h1>Hello! This is the Fruit app</h1>
    <p>Thanks for using our site</p>
    <p>${today}</p>
  `)
})





app.listen(3000, () => {
  console.log("Server running on port 3000");
})