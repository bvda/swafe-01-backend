import { Router } from 'express';
import { router as clientRouter } from './client';

const router = Router();
router.use('/client', clientRouter)

export { router }