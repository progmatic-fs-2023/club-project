import express from 'express';
import { list, getUserById, putUserById, destroyUserById } from '../controllers/users.controller';

const adminRouter = express.Router();

adminRouter.get('/', list);
adminRouter.get('/:id', getUserById);
adminRouter.put('/:id', putUserById);
adminRouter.delete('/:id', destroyUserById);

export default adminRouter;
