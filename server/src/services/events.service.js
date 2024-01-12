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

export { listAllEvents, eventByName };
