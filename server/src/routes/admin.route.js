import express from 'express';
import { list, getUserById } from '../controllers/users.controller';

const adminRouter = express.Router();

adminRouter.get('/', list);
adminRouter.get('/:id', getUserById);

export default adminRouter;
