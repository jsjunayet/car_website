import { AlluserService } from './user.service';
import sendResponse from '../../utilitiy/sendResponse';
import { catchAsync } from '../../utilitiy/catchAsync';
import dotenv from 'dotenv';
dotenv.config()

const userRegister = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await AlluserService.userRegisterService(body);
  
  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: data,
  });
});
const userLogin = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await AlluserService.userLoginService(body);
  const { accessToken, refreshToken } = data;

  res.cookie('refreshToken', refreshToken, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: 200,
  data: accessToken,
  });
});
const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AlluserService.refreshTokenService(refreshToken);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Access token is retrieved succesfully!',
    data: result,
  });
});
export const AlluserController = {
  userRegister,
  userLogin,
  refreshToken
};
