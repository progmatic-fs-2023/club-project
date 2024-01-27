import {
  listAllServiceBookings,
  getDetailsOfServiceBookingsById,
  deleteServiceBookingById,
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

// DELETE SERVICE BOOKINGS
const deleteServiceBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBooking = await deleteServiceBookingById(id);
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

export { listServiceBookings, getDetailsOfServiceBookings, deleteServiceBooking };
