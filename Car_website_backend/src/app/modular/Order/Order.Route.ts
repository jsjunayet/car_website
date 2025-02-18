import express from 'express';
import { AllOrderControllers } from './Order.Controllers';
const router = express.Router();

router.post('/create', AllOrderControllers.CreateOrderInMonogdb);
router.get("/verify", AllOrderControllers.verifyPayment);
router.get('/allOrder', AllOrderControllers.getAllorder)
router.get('/revenue', AllOrderControllers.CalculateRevenueInMongodb);

export const OrderRouter = router;
