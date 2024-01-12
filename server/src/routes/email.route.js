import express from 'express';
import { welcomeContactUsEmail } from '../services/email.service';

const emailRouter = express.Router();

emailRouter.post('/', welcomeContactUsEmail);

export default emailRouter;
