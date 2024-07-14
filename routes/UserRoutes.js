const express = require('express')

const User = require('../models/UserModel')
const { getUser, getUsers, updateUser, deleteUser, loginUser, registerUser, verifyToken } = require('../controllers/UserController')
const protect = require('../middlewares/protectedRoutes')

const router = express.Router()

//Login user
router.post('/login', loginUser)

//Register user
router.post('/register', registerUser)


//GET all user
router.get('/', getUsers)

//GET single user
router.get('/:id', getUser)

//DELETE a new user
router.delete('/:id', deleteUser)

//UPDATE a user
router.patch('/:id', updateUser)

router.get('/verify-token', protect, verifyToken);


module.exports = router