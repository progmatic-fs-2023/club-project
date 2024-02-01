import express from 'express';
import {
  list,
  getDetailsOfBookingById,
  deleteEventBooking,
  emailEventDelete,
} from '../controllers/admin.bookings.controller';

const adminBookingsRouter = express.Router();

adminBookingsRouter.get('/', list);
adminBookingsRouter.get('/:id', getDetailsOfBookingById);
adminBookingsRouter.delete('/:id', deleteEventBooking);
adminBookingsRouter.post('/:id/send-cancellation-email', emailEventDelete);

export default adminBookingsRouter;
