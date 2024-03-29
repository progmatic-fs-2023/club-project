import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import apiRouter from './routes/api.route';
import authRouter from './routes/auth.route';
import usersRouter from './routes/users.route';

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use(errorHandler);

export default app;
