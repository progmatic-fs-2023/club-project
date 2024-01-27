import express from 'express';
import { getServiceByMemberMembership } from '../controllers/services.controller';
import { updateMembership } from '../controllers/users.controller';

const membershipRouter = express.Router();

membershipRouter.get('/', getServiceByMemberMembership);
membershipRouter.put('/', updateMembership);

export default membershipRouter;
