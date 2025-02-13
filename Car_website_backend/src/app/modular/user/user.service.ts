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
    _id: result._id,
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

export { refreshTokenService };

export const AlluserService = {
  userRegisterService,
  userLoginService,
  refreshTokenService
};
