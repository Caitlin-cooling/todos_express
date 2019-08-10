const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function(req, res) {
  db.Todo.find()
    .then(function(todos){
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

router.get('/:todoId', function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(todo) {
      res.json(todo)
    })
    .catch(function(error) {
      res.send(error)
    })
})

router.put('/:todoId', function(req, res) {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo) {
      res.json(updatedTodo)
    })
    .catch(function(error) {
      res.send(error)
    })
})

router.delete('/:todoId', function(req, res) {
  db.Todo.remove({_id: req.params.todoId})
    .then(function(updatedTodo) {
      res.json({message: 'Todo has been deleted'})
    })
    .catch(function(error) {
      res.send(error)
    })
})

module.exports = router
