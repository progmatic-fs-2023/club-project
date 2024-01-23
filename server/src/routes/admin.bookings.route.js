import express from 'express';
import { list, getDetailsOfBookingById } from '../controllers/admin.bookings.controller';

const adminBookingsRouter = express.Router();

adminBookingsRouter.get('/', list);
adminBookingsRouter.get('/:id', getDetailsOfBookingById);

export default adminBookingsRouter;
