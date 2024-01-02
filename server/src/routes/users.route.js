import express from "express";
import * as usersController from '../controllers/users.controller';
import * as auth from '../middlewares/auth.middleware';

const router = express.Router()

router.get("/:id", auth.authenticateToken, auth.verifyAccessLevel, usersController.get);

export default router;