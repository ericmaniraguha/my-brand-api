import express from 'express'
import { QueryController } from '../../controllers/queryController.js'

const route = express.Router()

const queryControllers = new QueryController()

route.post('/', queryControllers.createQuery)
route.get('/', queryControllers.getAllQueries)
route.get('/:id', queryControllers.getQuery)
route.delete('/:id', queryControllers.deleteQuery)

export default route

