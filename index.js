const express = require('express')
const app = express()
const port = 3000
const todoRoutes = require('./routes/todos')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// use the routes and define a prefix for all
app.use(express.static(__dirname + '/views'))
app.use('/api/todos', todoRoutes)

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.listen(port, function () {
  console.log('Hello world')
})
