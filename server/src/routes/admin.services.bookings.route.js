import express from 'express';
import {
  listServiceBookings,
  getDetailsOfServiceBookings,
  deleteServiceBooking,
} from '../controllers/admin.services.bookings.controller';

const adminServicesBookingsRouter = express.Router();

adminServicesBookingsRouter.get('/', listServiceBookings);
adminServicesBookingsRouter.get('/:id', getDetailsOfServiceBookings);
adminServicesBookingsRouter.delete('/:id', deleteServiceBooking);

export default adminServicesBookingsRouter;
