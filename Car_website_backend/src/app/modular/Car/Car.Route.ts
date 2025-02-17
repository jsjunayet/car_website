import express from 'express';
import { CartAllController } from './Car.Controllers';
const router = express.Router();

router.post('/create', CartAllController.CreateCarInMonogdb);
router.get('/getAll', CartAllController.GerCarInMonogdb);
router.get('/:carId', CartAllController.GerSingleCarInMonogdb);
router.delete('/:carId', CartAllController.DeleltedCarInMonogdb);
router.put('/:carId', CartAllController.UpdatedCarInMonogdb);

export const CarRouter = router;
