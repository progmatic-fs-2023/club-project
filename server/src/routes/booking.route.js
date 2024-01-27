import express from 'express';

import { weekListById, createBooking, bookEvent } from '../controllers/booking.controller';

const bookingRouter = express.Router();

bookingRouter.get('/:id', weekListById);

bookingRouter.post('/', createBooking);

bookingRouter.post('/book', bookEvent);

export default bookingRouter;
