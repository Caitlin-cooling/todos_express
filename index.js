const express = require('express')
const app = express()
const port = 3000
const todoRoutes = require('./routes/todos')

app.get('/', function (req, res) {
  res.send('Hi there from express')
})

// use the routes and define a prefix for all
app.use('/api/todos', todoRoutes)

app.listen(port, function () {
  console.log('Hello world')
})
