import express from 'express';
import { list, getDetailsOfBookingById, deleteEventBooking } from '../controllers/admin.bookings.controller';

const adminBookingsRouter = express.Router();

adminBookingsRouter.get('/', list);
adminBookingsRouter.get('/:id', getDetailsOfBookingById);
adminBookingsRouter.delete('/:id', deleteEventBooking)

export default adminBookingsRouter;
