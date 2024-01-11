import * as db from './db.service';

// GET LIST ALL SERVICES
const listAllServices = async () => {
  const response = await db.query(
    'SELECT id, category, name, service_img AS "serviceImg", header_img AS "headerImg", details, more_details AS "moreDetails", slug_name AS "slugName" FROM services',
  );
  return response.rows;
};

// GET SERVICE BY NAME
const serviceByName = async name => {
  const response = await db.query(
    'SELECT id, category, name, service_img AS "serviceImg", header_img AS "headerImg", details, more_details AS "moreDetails" FROM services WHERE slug_name=$1',
    [name],
  );
  return response.rows[0];
};

export { listAllServices, serviceByName };