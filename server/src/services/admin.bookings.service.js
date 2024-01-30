import * as db from './db.service';

// GET  ALL BOOKINGS
const listAllBookings = async () => {
  // const response = await db.query('SELECT id, member_id, event_id FROM booking_members_events');
  const response = await db.query(
    `SELECT booking_members_events.id AS "bookingId", booking_members_events.member_id AS "member_id", booking_members_events.event_id AS "event_id", members.id AS "user_id", members.username AS "username", events.name AS "event_name", events.start_time AS "start_time", events.end_time AS "end_time", members.first_name AS "first_name", members.last_name AS "last_name" 
     FROM booking_members_events 
     INNER JOIN members ON members.id = booking_members_events.member_id 
     INNER JOIN events ON events.id = booking_members_events.event_id
     ORDER BY  events.start_time`,
  );
  return response.rows;
};

// GET BOOKING BY ID
// const findBookingByID = async id => {
//   const response = await db.query('SELECT * FROM booking_members_events WHERE id=$1', [id]);
//   return response.rows[0];
// };

// GET EVERY DETAIL
const getDetailsOfBookings = async id => {
  const response = await db.query(
    `SELECT booking_members_events.id AS "bookingId", booking_members_events.member_id AS "member_id", booking_members_events.event_id AS "event_id", members.username AS "username", events.name AS "event_name", events.start_time AS "start_time", events.end_time AS "end_time", members.first_name AS "first_name", members.last_name AS "last_name" 
     FROM booking_members_events 
     INNER JOIN members ON members.id = booking_members_events.member_id 
     INNER JOIN events ON events.id = booking_members_events.event_id 
     WHERE booking_members_events.id = $1`,
    [id],
  );
  return response.rows[0];
};

// DELETE SERVICE BOOKINGS

const deleteEventBookingById = async selectedBookingId => {
  try {
    const response = await db.query(
      'DELETE FROM booking_members_events WHERE booking_members_events.id = $1 RETURNING *',
      [selectedBookingId],
    );
    return response.rows[0];
  } catch (error) {
    console.error('Error deleting service booking by id:', error);
    throw error;
  }
};

export { listAllBookings, getDetailsOfBookings, deleteEventBookingById };
