import {
  listAllBookings,
  getDetailsOfBookings,
  deleteEventBookingById,
} from '../services/admin.bookings.service';
import 'dotenv/config';

// GET ALL EVENT BOOKINGS
const list = async (req, res) => {
  try {
    const allBookings = await listAllBookings();
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

// GET BOOKING BY ID
// const getBookingById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const booking = await findBookingByID(id);
//     if (booking) {
//       res.json(booking);
//     } else {
//       res.status(404).json({ message: 'Booking does not exist' });
//     }
//   } catch (err) {
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// };

// GET THE DETAILS OF THE BOOKING BY ID
const getDetailsOfBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await getDetailsOfBookings(id);
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

// DELETE EVENT BOOKING
const deleteEventBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBooking = await deleteEventBookingById(id);
    if (deletedBooking) {
      res.json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    console.error('Error deleting event booking:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { list, getDetailsOfBookingById, deleteEventBooking };
