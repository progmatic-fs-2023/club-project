import express from 'express';
import {
  createEvent,
  deleteEvent,
  getEventByName,
  list,
  updateEvent,
  getAvailableSeatsForEvent,
} from '../controllers/events.controller';

const eventsRouter = express.Router();

eventsRouter.get('/', list);
eventsRouter.get('/:name', getEventByName);

eventsRouter.post('/', createEvent);

eventsRouter.put('/:id', updateEvent);

eventsRouter.delete('/:id', deleteEvent);

eventsRouter.get('/:id/available-seats', getAvailableSeatsForEvent);

export default eventsRouter;
