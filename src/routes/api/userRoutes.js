import express from 'express'
import { UserController } from './../../controllers/userController.js'

const route = express.Router()

const userControllers = new UserController()

route.post('/', userControllers.createUser)
route.get('/', userControllers.getAllUsers)
route.get('/:id', userControllers.getUser)
route.patch('/:id', userControllers.updateUser)
route.delete('/:id', userControllers.deleteUser)

export default route