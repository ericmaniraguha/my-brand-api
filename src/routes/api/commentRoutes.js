import express from 'express'
import { CommentController } from './../../controllers/commentController.js'

const route = express.Router()

const commentControllers = new CommentController()

route.post('/', commentControllers.createComment)
route.get('/', commentControllers.getAllComments)


export default route