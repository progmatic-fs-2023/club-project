import * as db from './db.service';

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

export { listAWeekById, createNewBooking };
