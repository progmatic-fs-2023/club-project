import express from 'express';
import { weekListById } from '../controllers/booking.controller';

const bookingRouter = express.Router();

bookingRouter.get('/:id', weekListById);

export default bookingRouter;
