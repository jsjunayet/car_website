import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { globalMiddleWare } from './app/middleware/globalMiddleware';
import notFound from './app/middleware/noFound';
import router from './app/router/router';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'https://carwebsite-five.vercel.app',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use('/api', router);
app.use(notFound);
app.use(globalMiddleWare);

export default app;
