import express from 'express';
import { weekListById, createBooking } from '../controllers/booking.controller';

const bookingRouter = express.Router();

bookingRouter.get('/:id', weekListById);
bookingRouter.post('/', createBooking);

export default bookingRouter;
