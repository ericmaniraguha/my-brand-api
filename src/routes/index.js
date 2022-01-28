import express from 'express'

import welcomeRoutes from "./api/welcomeRoutes.js"
import articleRoutes from "./api/articleRoutes.js"
import queryRoutes from "./api/queryRoutes.js"
import userRoutes from "./api/userRoutes.js"
import commentRoutes from './api/commentRoutes.js'

const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/articles', articleRoutes)
routes.use('/queries', queryRoutes)
routes.use('/comments',commentRoutes)
routes.use('/user', userRoutes)

export default routes