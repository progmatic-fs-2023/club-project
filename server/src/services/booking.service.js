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

export { listAWeekById };
