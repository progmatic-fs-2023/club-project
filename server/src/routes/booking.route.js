import express from 'express';

import { weekListById, createBooking } from '../controllers/booking.controller';

import { weekListById, bookEvent } from '../controllers/booking.controller';


const bookingRouter = express.Router();

bookingRouter.get('/:id', weekListById);

bookingRouter.post('/', createBooking);

bookingRouter.post('/events', bookEvent);


export default bookingRouter;
