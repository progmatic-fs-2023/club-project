import express from 'express';
import { list, getServiceByName } from '../controllers/services.controller';

const servicesRouter = express.Router();

servicesRouter.get('/', list);
servicesRouter.get('/:name', getServiceByName);

export default servicesRouter;
