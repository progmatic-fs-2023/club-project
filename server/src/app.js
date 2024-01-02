import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import apiRouter from './routes/api.route';
import authRouter from './routes/auth.route';
import usersRouter from './routes/users.route';
import cookieParser from "cookie-parser";


const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use(errorHandler);
export default app;
