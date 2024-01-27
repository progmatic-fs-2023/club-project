import { Router } from 'express';
import servicesRouter from './services.route';
import eventsRouter from './events.route';
import aboutusRouter from './aboutus.route';
import emailRouter from './email.route';
import adminRouter from './admin.route';
import adminBookingsRouter from './admin.bookings.route';
import adminServicesBookingsRouter from './admin.services.bookings.route';
import membershipRouter from './membership.route';
import bookingRouter from './booking.route';
import { sendNewPasswordEmail } from '../services/email.service';
import {
  getUserByIdHeader,
  verifyNewPasswordEmail,
  verifyNewPasswords,
} from '../controllers/users.controller';
import { updatePicture } from '../controllers/profile.controller';

const router = Router();

router.use('/services', servicesRouter);
router.use('/services/membership', servicesRouter);
router.use('/services/:name', servicesRouter);
router.use('/events', eventsRouter);
router.use('/events/:name', eventsRouter);
router.use('/aboutus', aboutusRouter);
router.use('/contact', emailRouter);
router.use('/admin', adminRouter);
router.use('/admin/:id', adminRouter);
router.use('/bookings', adminBookingsRouter);
router.use('/bookings/:id', adminBookingsRouter);
router.use('/servicebookings', adminServicesBookingsRouter);
router.use('/servicebookings/:id', adminServicesBookingsRouter);
router.post('/send-new-password-email', sendNewPasswordEmail);
router.post('/forgot-password', sendNewPasswordEmail);
router.get('/reset-password', verifyNewPasswordEmail);
router.post('/reset-password', verifyNewPasswords);
router.use('/booking', bookingRouter);
router.use('/membership', membershipRouter);
router.post('/profile-picture', updatePicture);
router.get('/updateUsers', getUserByIdHeader);

router.get('/', (req, res) => {
  res.sendStatus(200);
});

export default router;
