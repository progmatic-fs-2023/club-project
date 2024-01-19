import express from 'express';
import { createEvent, deleteEvent, getEventByName, list } from '../controllers/events.controller';

const eventsRouter = express.Router();

eventsRouter.get('/', list);
eventsRouter.get('/:name', getEventByName);

eventsRouter.post('/', createEvent);

eventsRouter.delete('/:id', deleteEvent);

export default eventsRouter;
