import dotenv from 'dotenv';
dotenv.config();

export const config = {
  mongodb: process.env.MONGO_DB,
  port: process.env.PORT,
};
