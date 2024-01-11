import express from 'express';
import { listAll } from '../controllers/aboutus.controller';

const aboutusRouter = express.Router();

aboutusRouter.get('/', listAll);

export default aboutusRouter;
