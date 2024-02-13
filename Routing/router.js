const express = require('express')

const todoController = require('../controller/todoController')

const  router = new express.Router()
// add todos
router.post('/todo/addtodo',todoController.addTodo)
//display todos
router.get('/todo/gettodo',todoController.getTodo)

//paths


module.exports = router