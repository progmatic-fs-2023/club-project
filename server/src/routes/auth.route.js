import { Router } from 'express';
import { registerUser } from '../controllers/auth.controller';
import { loginUser } from '../controllers/auth.controller';
import { verifyEmail } from '../controllers/users.controller';

const router = Router();

router.post('/register', registerUser);

router.get('/register/confirm', verifyEmail);

router.post('/login', loginUser);



export default router;
