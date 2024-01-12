import { listAllEvents, eventByName } from '../services/events.service';
import 'dotenv/config';

// GET ALL EVENTS
const list = async (req, res) => {
  try {
    const allEvents = await listAllEvents();
    if (allEvents) {
      res.json(allEvents);
    } else {
      res.status(404).json({ message: 'Event do not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// GET EVENT BY NAME
const getEventByName = async (req, res) => {
  const { name } = req.params;
  try {
    const event = await eventByName(name);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event does not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export { list, getEventByName };
