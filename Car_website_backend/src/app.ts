import express from 'express';
import router from './app/router/router';
import cookieParser from 'cookie-parser';
import { globalMiddleWare } from './app/middleware/globalMiddleware';
import notFound from './app/middleware/noFound';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(
    cors({
      origin: 'https://incredible-muffin-bdd553.netlify.app', 
      credentials: true,
    })
  );
app.use(cookieParser());
app.use('/api', router);
app.use(notFound)
app.use(globalMiddleWare);

export default app;
