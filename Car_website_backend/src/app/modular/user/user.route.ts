import { Router } from 'express';
import { validation } from '../../middleware/validation';
import { uservalidationAll } from './user.validation';
import { AlluserController } from './user.controller';

const router = Router();
router.post(
  '/register',
  validation(uservalidationAll.userRegistervalidation),
  AlluserController.userRegister,
);
router.post(
  '/login',
  validation(uservalidationAll.userLoginvalidation),
  AlluserController.userLogin,
);
router.post(
  '/refresh-token',
  validation(uservalidationAll.refreshTokenValidationSchema),
  AlluserController.refreshToken,
);
export const userRouter = router;
