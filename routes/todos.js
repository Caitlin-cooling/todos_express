const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.send('Hello from todos routes')
})

module.exports = router
