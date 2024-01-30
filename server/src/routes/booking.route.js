import express from 'express';
import {
  weekListById,
  createBooking,
  bookEvent,
  getEventBookingByMemberId,
} from '../controllers/booking.controller';
import * as auth from '../middlewares/auth.middleware';

const bookingRouter = express.Router();

bookingRouter.get('/:id', weekListById);

bookingRouter.post('/', createBooking);

bookingRouter.get('/book/:id', getEventBookingByMemberId);
bookingRouter.post('/book', auth.authenticateToken, bookEvent);

export default bookingRouter;
