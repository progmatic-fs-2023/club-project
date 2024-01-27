import * as db from './db.service';

// GET  ALL BOOKINGS
const listAllServiceBookings = async () => {
  const response = await db.query(
    `SELECT bookings_services.booking_id AS "serviceBookingId", bookings_services.member_id AS "memberId", time_slots.service_id AS "serviceId", services.name AS "serviceName", time_slots.id AS "timeSlotId", start_time AS "startTime", end_time AS "endTime", members.first_name AS "firstName", members.last_name AS "lastName", members.username AS "username" 
     FROM bookings_services INNER JOIN members ON members.id = bookings_services.member_id 
     INNER JOIN time_slots ON time_slots.id = bookings_services.time_slot_id 
     INNER JOIN services ON services.id = time_slots.service_id
     ORDER BY start_time`,
  );
  return response.rows;
};

// GET EVERY DETAIL
const getDetailsOfServiceBookingsById = async id => {
  const response = await db.query(
    `SELECT bookings_services.booking_id AS "serviceBookingId", bookings_services.member_id AS "memberId", time_slots.service_id AS "serviceId", services.name AS "serviceName", time_slots.id AS "timeSlotId", start_time AS "startTime", end_time AS "endTime", members.first_name AS "firstName", members.last_name AS "lastName", members.username AS "username", time_slots.id AS "timeSlotId" 
     FROM bookings_services INNER JOIN members ON members.id = bookings_services.member_id 
     INNER JOIN time_slots ON time_slots.id = bookings_services.time_slot_id 
     INNER JOIN services ON services.id = time_slots.service_id 
     WHERE bookings_services.booking_id = $1`,
    [id],
  );
  return response.rows[0];
};

export { listAllServiceBookings, getDetailsOfServiceBookingsById };
