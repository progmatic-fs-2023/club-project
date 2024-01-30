import * as db from './db.service';

// GET A WEEK LIST BY ID
const listAWeekById = async (id, startDate) => {
  const response = await db.query(
    `
SELECT *
FROM public.time_slots
WHERE 
  start_time >= $2::DATE - INTERVAL '1 day' * (EXTRACT(DOW FROM $2::DATE) )
  AND end_time < $2::DATE - INTERVAL '1 day' * (EXTRACT(DOW FROM $2::DATE) ) + INTERVAL '1 week'
  AND service_id = $1`,
    [id, startDate],
  );
  return response.rows;
};

// CREATE A SERVICE BOOKING
const createNewBooking = async (timeSlotId, memberId, isReserved) => {
  const insertBooking = await db.query(
    'INSERT INTO bookings_services (time_slot_id, member_id) VALUES ($1, $2) RETURNING *',
    [timeSlotId, memberId],
  );
  const updateReserved = await db.query(
    'UPDATE time_slots SET is_reserved = $1 WHERE id = $2 RETURNING *',
    [isReserved, timeSlotId],
  );

  return { insertResult: insertBooking.rows, updateResult: updateReserved.rows };
};

// CREATE AN EVENT BOOKING
const sendUserDataToDatabase = async (userId, eventId) => {
  console.log(userId, eventId);
  const result = await db.query(
    `INSERT INTO booking_members_events (member_id, event_id) VALUES ($1, $2)`,
    [userId, eventId],
  );

  return result.rows;
};

// GET BOOKED EVENT STATUS
const getBookedEventByMemberId = async (id, eventId) => {
  const response = await db.query(
    `SELECT EXISTS (
      SELECT 1 FROM public.booking_members_events WHERE member_id = $1 AND event_id = $2)`,
    [id, eventId],
  );

  return response.rows[0];
};

export { listAWeekById, createNewBooking, sendUserDataToDatabase, getBookedEventByMemberId };
