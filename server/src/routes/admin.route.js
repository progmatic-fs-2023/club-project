import express from 'express';
import {
  list,
  getUserById,
  putUserById,
  putIsPaymentById,
  destroyUserById,
} from '../controllers/users.controller';

const adminRouter = express.Router();

adminRouter.get('/', list);
adminRouter.get('/:id', getUserById);
adminRouter.put('/:id', putUserById);
adminRouter.put('/finance/:id', putIsPaymentById);
adminRouter.delete('/:id', destroyUserById);

export default adminRouter;
