import { Router } from 'express';
import cors from 'cors';
import * as faulty from '../controller/faulty';

const router = Router();

router.use(cors());

router.get('/launch_vehicles', faulty.listLaunchVehicles);

router.get('/astronauts', faulty.listAstronauts);

export { router };