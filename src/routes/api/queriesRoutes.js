import express from 'express'
import { QueryController } from './../../controllers/queriesController.js'
import { authenticate } from '../../middlewares/authenticate.js';
import { queryValidation } from '../../validations/queryValidation/query.validation.js';

import multer from "multer";
import { fileFilter } from "../../helpers/fileFilter.js";

const storage = multer.diskStorage({});
const uploads = multer({ storage, fileFilter });

const router = express.Router()
const queryControllers = new QueryController()
router.post('/',uploads.single(""),queryValidation, queryControllers.createQuery)
router.get('/',authenticate, queryControllers.getAllQueries)
router.get('/:id', authenticate,queryControllers.getQuery)
router.delete('/:id',authenticate, queryControllers.deleteQuery)

export default router