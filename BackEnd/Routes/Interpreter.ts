import express from 'express'
import { Controller } from '../Controller/Controller'
const router = express.Router()
const interpreter: Controller = new Controller()
router.get('/',interpreter.runing)
router.post('/parser',interpreter.parser)
router.post('/parser_path',interpreter.parser_path)
export default router