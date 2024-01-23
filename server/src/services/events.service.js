import * as db from './db.service';

// GET LIST ALL EVENTS
const listAllEvents = async () => {
  const response = await db.query(
    'SELECT id, name, start_time AS "startTime", end_time AS "endTime", available_seats AS "availableSeats", event_img AS "eventImg", header_img AS "headerImg", details, more_details AS "moreDetails", slug_name AS "slugName" FROM events',
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

export { listAllEvents, eventByName, createNewEvent, deleteEventById, updateEventById };
