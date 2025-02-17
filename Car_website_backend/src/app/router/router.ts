import { Router } from 'express';
import { userRouter } from '../modular/user/user.route';
import { CarRouter } from '../modular/Car/Car.Route';
import { OrderRouter } from '../modular/Order/Order.Route';

const router = Router();
const allRouter = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/cars',
    route: CarRouter,
  },
  {
    path: '/orders',
    route: OrderRouter,
  },
];
allRouter.forEach((route) => router.use(route.path, route.route));
export default router;
