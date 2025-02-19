import express from 'express';
import { CartAllController } from './Car.Controllers';
import { authorizeRole } from '../../middleware/verifyToken';
import { validation } from '../../middleware/validation';
import { CarValidation } from './car.validationZod';
const router = express.Router();

router.post('/create', validation(CarValidation), authorizeRole(["admin"]), CartAllController.CreateCarInMonogdb);
router.get('/getAll', CartAllController.GerCarInMonogdb);
router.get('/:carId', CartAllController.GerSingleCarInMonogdb);
router.delete('/:carId', authorizeRole(["admin"]), CartAllController.DeleltedCarInMonogdb);
router.put('/:carId',authorizeRole(["admin"]), CartAllController.UpdatedCarInMonogdb);

export const CarRouter = router; 
