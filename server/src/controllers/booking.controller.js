import {
  listAWeekById,
  createNewBooking,
  sendUserDataToDatabase,
} from '../services/booking.service';
import HttpError from '../utils/HttpError';
import { sendEventBookingEmail } from '../services/email.service';
import { getUserEmail, getEventDetails } from '../services/events.service';

const weekListById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const startDate = req.query.start_date;

    const list = await listAWeekById(id, startDate);
    if (list) {
      res.json(list);
    } else {
      next(new HttpError('Week does not exist', 404));
    }
  } catch (err) {
    next(new HttpError(err.message, 500));
  }
};


const createBooking = async (req, res, next) => {
  try {
    const { timeSlotId } = req.body;
    const { memberId } = req.body;
    const { isReserved } = req.body;

    const newBooking = await createNewBooking(timeSlotId, memberId, isReserved);
    if (newBooking) {
      res.json(newBooking);
    } else {
      next(new HttpError('New booking does not exist', 404));
    }
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const bookEvent = async (req, res) => {
  try {
    const { userId } = req.cookies;
    const { eventId } = req.cookies;

    console.log(eventId);

    await sendUserDataToDatabase(userId, eventId);

    const email = await getUserEmail(userId);
    const { eventName, eventTime } = await getEventDetails(eventId);

    await sendEventBookingEmail(email, eventName, eventTime);
    return res.status(201).json({
      message: 'Event booked successfully.',
    });
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({
      message: 'Internal server error.',
    });
  }
};

export { weekListById, createBooking, bookEvent };
