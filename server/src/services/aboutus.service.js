import * as db from './db.service';

// GET ALL FAME AND CHARITY
const executeQuery = async sqlQuery => {
  const response = await db.query(sqlQuery);
  return response.rows;
};

const listFamous = async () => {
  const result = 'SELECT id, name, famous_img AS "famousImg", profession, year FROM famous';
  return executeQuery(result);
};

const listCharity = async () => {
  const result = 'SELECT id, organization, charity_img AS "charityImg", money FROM charity';
  return executeQuery(result);
};

export { listFamous, listCharity };
