import { listAllBookings, getDetailsOfBookings } from '../services/admin.bookings.service';
import 'dotenv/config';

// GET ALL BOOKINGS
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

export { list, getDetailsOfBookingById };
