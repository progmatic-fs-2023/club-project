import express from 'express';
import {
  listServiceBookings,
  getDetailsOfServiceBookings,
  deleteServiceBooking,
  emailServiceDelete,
} from '../controllers/admin.services.bookings.controller';

const adminServicesBookingsRouter = express.Router();

adminServicesBookingsRouter.get('/', listServiceBookings);
adminServicesBookingsRouter.get('/:id', getDetailsOfServiceBookings);
adminServicesBookingsRouter.delete('/:id', deleteServiceBooking);
adminServicesBookingsRouter.post('/:id/send-cancellation-email', emailServiceDelete);

export default adminServicesBookingsRouter;
