const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function(req, res) {
  // note that Todo is because this is being exported from todo.js
  // which is being called in index.js
  db.Todo.find()
    .then(function(res){
      res.json(todos)
    })
    .catch(function(error) {
      res.send(error)
    })
})

module.exports = router
