import express from 'express';
import { list } from '../controllers/events.controller';

const eventsRouter = express.Router();

eventsRouter.get('/', list);

export default eventsRouter;
