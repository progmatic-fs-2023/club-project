import {
  listAllEvents,
  eventByName,
  createNewEvent,
  deleteEventById,
} from '../services/events.service';
import 'dotenv/config';

const list = async (req, res) => {
  try {
    const allEvents = await listAllEvents();
    if (allEvents) {
      res.json(allEvents);
    } else {
      res.status(404).json({ message: 'Event does not exist' });
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

// CREATE EVENT
const createEvent = async (req, res) => {
  const {
    name,
    startTime,
    endTime,
    availableSeats,
    eventImg,
    headerImg,
    details,
    moreDetails,
    slugName,
  } = req.body;

  try {
    const newEvent = await createNewEvent(
      name,
      startTime,
      endTime,
      availableSeats,
      eventImg,
      headerImg,
      details,
      moreDetails,
      slugName,
    );

    res.status(201).json({ message: 'success', event: newEvent });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await deleteEventById(eventId);

    if (deletedEvent) {
      res.json({ success: true, message: 'Event deleted successfully', data: deletedEvent });
    } else {
      res.status(404).json({ success: false, message: 'Event not found' });
    }
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
export { list, getEventByName, createEvent, deleteEvent };
