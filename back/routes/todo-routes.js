const express = require('express')
const Todos = require('../models/todo.js')
const router = express.Router({ mergeParams: true })
const todoController = require('../controllers/todo-controllers.js')
router.get('/' , todoController.getTodos)
router.post('/' ,todoController.createTodo )
router.delete('/',todoController.deleteTodo)

module.exports = router