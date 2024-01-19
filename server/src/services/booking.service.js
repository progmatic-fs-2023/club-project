import * as db from './db.service';

const listAWeekById = async id => {
  const response = await db.query(
    `
    SELECT * 
    FROM public.time_slots 
    WHERE start_time >= CURRENT_DATE - INTERVAL '1 day' * (EXTRACT(DOW FROM CURRENT_DATE) - 1) 
      AND start_time < CURRENT_DATE - INTERVAL '1 day' * (EXTRACT(DOW FROM CURRENT_DATE) - 1) + INTERVAL '1 week'
      AND service_id = $1`,
    [id],
  );
  return response.rows;
};

export { listAWeekById };
