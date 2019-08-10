const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function(req, res) {
  db.Todo.find()
    .then(function(res){
      res.json(todos)
    })
    .catch(function(error) {
      res.send(error)
    })
})

router.post('/', function(req, res) {
  db.Todo.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo)
    })
    .catch(function(error) {
      res.send(error)
    })
})

module.exports = router
