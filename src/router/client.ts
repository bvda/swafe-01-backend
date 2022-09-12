import { Router } from 'express';
import cors from 'cors';
import * as clientController from '../controller/client';

const router = Router();
router.use(cors());

router.get('/', clientController.list);
router.get('/faulty', clientController.faultyList);

export { router }

