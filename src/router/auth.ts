import { Router } from 'express'
import cors from 'cors'
import * as auth from '../controller/auth'
import * as astronautController from '../controller/astronauts'

const router = Router()
router.use(cors())

router.post('/login', auth.login)
router.get('/astronauts', auth.verifyToken, astronautController.list)

export { router }