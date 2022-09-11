import { Router } from 'express';
import { router as corsRouter } from './cors'
import { router as apiRouter } from './api'
import { router as faultyRouter} from './faulty'
import { router as authRouter } from './auth'

const router = Router();

router.use('/faulty', faultyRouter);
router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/cors', corsRouter);

export { router }