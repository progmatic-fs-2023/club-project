import express from 'express';
import {
  listServiceBookings,
  getDetailsOfServiceBookings,
} from '../controllers/admin.services.bookings.controller';

const adminServicesBookingsRouter = express.Router();

adminServicesBookingsRouter.get('/', listServiceBookings);
adminServicesBookingsRouter.get('/:id', getDetailsOfServiceBookings);

export default adminServicesBookingsRouter;
