import * as db from './db.service';

// GET LIST ALL EVENTS
const listAllEvents = async () => {
  const response = await db.query(
    'SELECT events.id, events.name, events.start_time AS "startTime", events.end_time AS "endTime", events.available_seats AS "availableSeats", events.event_img AS "eventImg", events.header_img AS "headerImg", events.details, events.more_details AS "moreDetails", events.slug_name AS "slugName", events.available_seats - COUNT(booking_members_events.event_id) AS "modifiedAvailableSeats" FROM events LEFT JOIN booking_members_events ON booking_members_events.event_id = events.id GROUP BY events.id, events.available_seats',
    [],
  );
  return response.rows;
};

// GET EVENT BY NAME
const eventByName = async name => {
  const response = await db.query(
    'SELECT id, name, start_time AS "startTime", end_time AS "endTime", available_seats AS "availableSeats", event_img AS "eventImg", header_img AS "headerImg", details, more_details AS "moreDetails" FROM events WHERE slug_name=$1',
    [name],
  );
  return response.rows[0];
};

// CREATE EVENT
const createNewEvent = async (
  name,
  startTime,
  endTime,
  availableSeats,
  eventImg,
  headerImg,
  details,
  moreDetails,
  slugName,
) => {
  const response = await db.query(
    'INSERT INTO events(name, start_time, end_time, available_seats, event_img, header_img, details, more_details, slug_name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
    [name, startTime, endTime, availableSeats, eventImg, headerImg, details, moreDetails, slugName],
  );

  return response.rows[0];
};

// DELETE EVENT BY ID
const deleteEventById = async eventId => {
  const response = await db.query('DELETE FROM events WHERE id = $1 RETURNING *', [eventId]);
  return response.rows[0];
};

const updateEventById = async (
  id,
  name,
  startTime,
  endTime,
  availableSeats,
  eventImg,
  headerImg,
  details,
  moreDetails,
  slugName,
) => {
  const response = await db.query(
    'UPDATE events SET name=$1, start_time=$2, end_time=$3, available_seats=$4, event_img=$5, header_img=$6, details=$7, more_details=$8, slug_name=$9 WHERE id=$10 RETURNING *',
    [
      name,
      startTime,
      endTime,
      availableSeats,
      eventImg,
      headerImg,
      details,
      moreDetails,
      slugName,
      id,
    ],
  );

  return response.rows[0];
};

// AVAILABLE SEATS
const getAvailableSeatsForEventById = async eventId => {
  const response = await db.query(
    'SELECT available_seats - (SELECT COUNT(*) FROM events INNER JOIN booking_members_events ON booking_members_events.event_id = events.id WHERE events.id = $1) AS modified_available_seats FROM events WHERE events.id = $1',
    [eventId],
  );

  return response.rows[0];
};

async function getUserEmail(userId) {
  const result = await db.query('SELECT email FROM members WHERE id = $1', [userId]);

  return result.rows[0].email;
}

const getEventDetails = async eventId => {
  try {
    const result = await db.query(
      'SELECT name AS eventName, start_time AS eventStartTime, end_time AS eventEndTime FROM events WHERE id = $1',
      [eventId],
    );

    if (result.rows.length > 0) {
      return {
        eventName: result.rows[0].eventname,
        eventStartTime: result.rows[0].eventstarttime,
        eventEndTime: result.rows[0].eventendtime,
      };
    }

    throw new Error('Event not found for the given eventId.');
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};

export {
  listAllEvents,
  eventByName,
  createNewEvent,
  deleteEventById,
  updateEventById,
  getUserEmail,
  getEventDetails,
  getAvailableSeatsForEventById,
};
