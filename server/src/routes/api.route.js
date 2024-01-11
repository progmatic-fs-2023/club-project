import { Router } from 'express';
import { welcomeContactUsEmail } from '../services/email.service';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.post('/contact-us', welcomeContactUsEmail);

export default router;
