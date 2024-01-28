import * as db from './db.service';

// GET LIST ALL SERVICES
const listAllServices = async () => {
  const response = await db.query(
    'SELECT id, category, name, service_img AS "serviceImg", header_img AS "headerImg", details, more_details AS "moreDetails", slug_name AS "slugName", membership FROM services',
  );
  return response.rows;
};

// GET SERVICE BY MEMBER'S MEMBERSHIP
const serviceByMemberMembership = async membership => {
  const response = await db.query(
    'SELECT id, category, name, service_img AS "serviceImg", header_img AS "headerImg", details, more_details AS "moreDetails", membership FROM services WHERE $1 LIKE CONCAT(\'%\', membership, \'%\')',
    [membership],
  );
  return response.rows;
};

// GET SERVICE BY NAME
const serviceByName = async name => {
  const response = await db.query(
    'SELECT id, category, name, service_img AS "serviceImg", header_img AS "headerImg", details, more_details AS "moreDetails", membership FROM services WHERE slug_name=$1',
    [name],
  );
  return response.rows[0];
};

const getServiceDetails = async timeSlotId => {
  try {
    const result = await db.query(
      'SELECT ts.start_time AS serviceStartTime, ts.end_time AS serviceEndTime, s.name AS serviceName ' +
        'FROM time_slots ts ' +
        'JOIN services s ON ts.service_id = s.id ' +
        'WHERE ts.id = $1',
      [timeSlotId],
    );
    console.log(result);
    if (result.rows.length > 0) {
      return {
        serviceStartTime: result.rows[0].servicestarttime,
        serviceEndTime: result.rows[0].serviceendtime,
        serviceName: result.rows[0].servicename,
      };
    }

    throw new Error('Event not found for the given eventId.');
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};

export { listAllServices, serviceByName, serviceByMemberMembership, getServiceDetails };
