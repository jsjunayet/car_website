/* eslint-disable @typescript-eslint/no-unused-vars */
import AppErrors from '../../errors/AppErrors';
import { Iuser } from './user.interface';
import { usermodel } from './user.model';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const userRegisterService = async (body: Iuser) => {
  const result = await usermodel.create(body);

  return {
    name: result.name,
    email: result.email,
  };
};
const userLoginService = async (body: Iuser) => {
  const RegisterUser = await usermodel.findOne({ email: body.email });
  if (!RegisterUser) {
    throw new AppErrors(404, 'Invalid credentials');
  }

  const matchPassword = await bcrypt.compare(body.password, RegisterUser.password);
  if (!matchPassword) {
    throw new AppErrors(401, 'Invalid credentials');
  }

  const accessToken = jwt.sign(
    { userID: RegisterUser._id, role: RegisterUser.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '15m' } 
  );

  const refreshToken = jwt.sign(
    { userID: RegisterUser._id },
    process.env.JWT_REFRESH_SECRET as string,
    { expiresIn: '7d' } 
  );

  return { accessToken,refreshToken}; 
};
const refreshTokenService = async (token: string | undefined): Promise<string> => {
  if (!token) {
    throw new AppErrors(403, 'Refresh token is required');
  }
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
    const {userID}=decoded as JwtPayload;

  const user = await usermodel.findById(userID);
  if (!user) {
    throw new AppErrors(403, 'User not found');
  }

  // Generate new Access Token
  const newAccessToken = jwt.sign(
    { userID: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '15m' }
  );

  return newAccessToken;
};

const AlluserGet = async () => {
  const result = await usermodel.find();
  return result
};
interface User {
  _id: string;
  role: 'user' | 'admin'; 
  save(): Promise<void>;
}

const UpdateRole = async (userId: string): Promise<{ message: string }> => {
  try {
    const user = await usermodel.findById(userId) as User | null;

    if (!user) {
      return { message: 'User not found' };
    }

    const newRole = user.role === 'user' ? 'admin' : 'user';
    user.role = newRole;

    await user.save();
    return { message: `User role updated to ${newRole}` };
  } catch (error) {
    return { message: 'An error occurred while updating the user role.' };
  }
};
const DeletedUser = async (id: string) => {
  const result = await usermodel.findByIdAndDelete({ _id: id });
  return result;
};

export const AlluserService = {
  userRegisterService,
  userLoginService,
  refreshTokenService,
  AlluserGet,
  UpdateRole,
  DeletedUser
  
};
