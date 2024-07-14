const express = require('express')
const { getTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/TaskController')
const protect = require('../middlewares/protectedRoutes')


const router = express.Router()

//GET all tasks
router.get('/', protect, getTasks)

//GET single task
router.get('/:id', getTask)

//POST a new task
router.post('/', createTask)

//UPDATE a task
router.patch('/:id', updateTask)

//DELETE a new task
router.delete('/:id', deleteTask)

module.exports = router