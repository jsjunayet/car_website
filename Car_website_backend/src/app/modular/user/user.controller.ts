import dotenv from 'dotenv';
import AppErrors from '../../errors/AppErrors';
import { catchAsync } from '../../utilitiy/catchAsync';
import sendResponse from '../../utilitiy/sendResponse';
import { AlluserService } from './user.service';
dotenv.config();

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
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    // maxAge: 365 * 24 * 60 * 60 * 1000
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
const AlluserGet = catchAsync(async (req, res) => {
  const result = await AlluserService.AlluserGet();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All user retrieved succesfully!',
    data: result,
  });
});
const UpdateRole = catchAsync(async (req, res) => {
  const result = await AlluserService.UpdateRole(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'user Roll update succesfully!',
    data: result,
  });
});
const changePasswordService = catchAsync(async (req, res) => {
  const id = req?.user?.userID;
  if (!id) {
    throw new AppErrors(401, 'Unauthorized user');
  }
  const result = await AlluserService.changePasswordService(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password Change succesfully!',
    data: result,
  });
});

const singleUser = catchAsync(async (req, res) => {
  const id = req?.user?.userID;
  if (!id) {
    throw new AppErrors(401, 'Unauthorized user');
  }
  const result = await AlluserService.singleUser(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'single user retrive succesfully!',
    data: result,
  });
});
const upateUser = catchAsync(async (req, res) => {
  const id = req?.user?.userID;
  const body = req.body;
  const result = await AlluserService.upateUser(id, body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'user profile update succesfully!',
    data: result,
  });
});

const DeletedUser = catchAsync(async (req, res) => {
  const result = await AlluserService.DeletedUser(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Deleted user succesfully!',
    data: result,
  });
});
export const AlluserController = {
  userRegister,
  userLogin,
  refreshToken,
  AlluserGet,
  UpdateRole,
  DeletedUser,
  changePasswordService,
  upateUser,
  singleUser,
};
