import { Router } from 'express';
import { userRouter } from '../modular/user/user.route';
import { CarRouter } from '../modular/Car/Car.Route';

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
];
allRouter.forEach((route) => router.use(route.path, route.route));
export default router;
