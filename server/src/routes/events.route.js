import express from 'express';
import { getEventByName, list } from '../controllers/events.controller';

const eventsRouter = express.Router();

eventsRouter.get('/', list);
eventsRouter.get('/:name', getEventByName);

export default eventsRouter;
