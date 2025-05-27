/* eslint-disable @typescript-eslint/no-unused-vars */
// types/express.d.ts
import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload; // or a more specific custom type
  }
}
