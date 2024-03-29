import {
  listAllServiceBookings,
  getDetailsOfServiceBookingsById,
  deleteServiceBookingById,
} from '../services/admin.services.bookings.service';
import 'dotenv/config';
import { getUserEmail } from '../services/events.service';
import { getServiceDetails } from '../services/services.service';
import { sendServiceDeleteEmail } from '../services/email.service';

// GET ALL SERVICE BOOKINGS
const listServiceBookings = async (req, res) => {
  try {
    const allBookings = await listAllServiceBookings();
    if (allBookings) {
      res.json(allBookings);
    } else {
      res.status(404).json({ message: 'Bookings do not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// GET THE DETAILS OF THE BOOKING BY ID
const getDetailsOfServiceBookings = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await getDetailsOfServiceBookingsById(id);
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ message: 'Booking does not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// DELETE SERVICE BOOKINGS
const deleteServiceBooking = async (req, res) => {
  const { id } = req.params;
  const { timeSlotId } = req.query;
  try {
    const deletedBooking = await deleteServiceBookingById(id, timeSlotId);
    if (deletedBooking) {
      res.json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    console.error('Error deleting service booking:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const emailServiceDelete = async (req, res) => {
  try {
    const { userId } = req.cookies;
    const { timeSlotId } = req.body;

    const email = await getUserEmail(userId);
    const { serviceName, serviceStartTime, serviceEndTime } = await getServiceDetails(timeSlotId);

    console.log(serviceName, serviceStartTime, serviceEndTime);

    await sendServiceDeleteEmail(email, serviceName, serviceStartTime, serviceEndTime);
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

export {
  listServiceBookings,
  getDetailsOfServiceBookings,
  deleteServiceBooking,
  emailServiceDelete,
};
