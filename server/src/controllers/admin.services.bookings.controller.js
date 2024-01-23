import {
  listAllServiceBookings,
  getDetailsOfServiceBookingsById,
} from '../services/admin.services.bookings.service';
import 'dotenv/config';

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

export { listServiceBookings, getDetailsOfServiceBookings };
