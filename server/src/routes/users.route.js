import express from 'express';
import * as usersController from '../controllers/users.controller';
import * as auth from '../middlewares/auth.middleware';

const usersRouter = express.Router();

usersRouter.get(
  '/:id',
  auth.authenticateToken,
  auth.verifyAccessLevel,
  usersController.getUserById,
);

export default usersRouter;
