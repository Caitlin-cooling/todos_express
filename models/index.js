const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// allows the use of promises
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');