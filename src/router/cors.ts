import { Router } from 'express';
import cors from 'cors';
import * as astronautController from '../controller/astronauts'
import * as launchVehicleController from '../controller/launch_vehicles'

const router = Router();

router.use(cors());

router.get('/launch_vehicles', launchVehicleController.list)
router.post('/launch_vehicle', launchVehicleController.update)

router.get('/astronauts', astronautController.list)
router.delete('/astronauts', astronautController.remove)
router.patch('/astronauts', astronautController.update)

export { router };