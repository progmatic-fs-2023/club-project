import express from 'express';
import { getServiceByMemberMembership } from '../controllers/services.controller';

const membershipRouter = express.Router();

membershipRouter.get('/', getServiceByMemberMembership);

export default membershipRouter;
