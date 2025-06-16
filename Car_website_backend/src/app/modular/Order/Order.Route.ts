import express from 'express';
import { validation } from '../../middleware/validation';
import { authorizeRole } from '../../middleware/verifyToken';
import { AllOrderControllers } from './Order.Controllers';
import { OrderValidation } from './Order.validationZod';
const router = express.Router();

router.post(
  '/create',
  validation(OrderValidation),
  authorizeRole(['user', 'admin']),
  AllOrderControllers.CreateOrderInMonogdb,
);
router.get(
  '/verify',
  authorizeRole(['user', 'admin']),
  AllOrderControllers.verifyPayment,
);
router.get(
  '/allOrder',
  authorizeRole(['admin']),
  AllOrderControllers.getAllorder,
);
router.get('/allOrderAndStatus', AllOrderControllers.allOrderAndStatus);

router.get(
  '/getsingle',
  authorizeRole(['user', 'admin']),
  AllOrderControllers.getSingleId,
);
router.delete(
  '/:id',
  authorizeRole(['admin']),
  AllOrderControllers.deletedorder,
);

router.get(
  '/revenue',
  authorizeRole(['admin']),
  AllOrderControllers.CalculateRevenueInMongodb,
);

export const OrderRouter = router;
