import {
  listAWeekById,
  createNewBooking,
  sendUserDataToDatabase,
  getBookedEventByMemberId,
} from '../services/booking.service';
import HttpError from '../utils/HttpError';
import { sendEventBookingEmail, sendServiceBookingEmail } from '../services/email.service';
import { getUserEmail, getEventDetails } from '../services/events.service';
import { getServiceDetails } from '../services/services.service';

// GET A WEEK LIST BY ID
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

// GET A BOOKED EVENT STATUS BY MEMBER'S ID
const getEventBookingByMemberId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { eventId } = req.query;

    const event = await getBookedEventByMemberId(id, eventId);
    if (event) {
      res.json(event);
    } else {
      next(new HttpError('Event booking does not exist', 404));
    }
  } catch (err) {
    next(new HttpError(err.message, 500));
  }
};

// CREATE A SERVICE BOOKING
const createBooking = async (req, res, next) => {
  try {
    const { timeSlotId, memberId, isReserved } = req.body;

    const email = await getUserEmail(memberId);
    const { serviceStartTime, serviceEndTime, serviceName } = await getServiceDetails(timeSlotId);
    await sendServiceBookingEmail(email, serviceName, serviceStartTime, serviceEndTime);

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

// CREATE AN EVENT BOOKING
const bookEvent = async (req, res) => {
  try {
    const { userId } = req.cookies;
    const { eventId } = req.cookies;

    await sendUserDataToDatabase(userId, eventId);

    const email = await getUserEmail(userId);
    const { eventName, eventStartTime, eventEndTime } = await getEventDetails(eventId);

    await sendEventBookingEmail(email, eventName, eventStartTime, eventEndTime);
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

export { weekListById, createBooking, bookEvent, getEventBookingByMemberId };
