import { listAllEvents } from '../services/events.service';
import 'dotenv/config';

// GET ALL EVENTS
const list = async (req, res) => {
  try {
    const allEvents = await listAllEvents();
    if (allEvents) {
      res.json(allEvents);
    } else {
      res.status(404).json({ message: 'Events do not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export { list };
