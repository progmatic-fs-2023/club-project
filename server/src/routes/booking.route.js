import express from 'express';
import {
  weekListById,
  createBooking,
  bookEvent,
  getEventBookingByMemberId,
} from '../controllers/booking.controller';

const bookingRouter = express.Router();

bookingRouter.get('/:id', weekListById);

bookingRouter.post('/', createBooking);

bookingRouter.get('/book/:id', getEventBookingByMemberId);
bookingRouter.post('/book', bookEvent);

export default bookingRouter;
