import { Router } from 'express';
import servicesRouter from './services.route';
import eventsRouter from './events.route';
import aboutusRouter from './aboutus.route';

const router = Router();

router.use('/services', servicesRouter);
router.use('/services/:name', servicesRouter);
router.use('/events', eventsRouter);
router.use('/events/:name', eventsRouter);
router.use('/aboutus', aboutusRouter);

router.get('/', (req, res) => {
  res.sendStatus(200);
});

export default router;
