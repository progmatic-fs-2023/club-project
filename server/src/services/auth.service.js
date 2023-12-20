import * as db from './db.service';

export const isUsernameExist = async ({ username }) => {
  const result = await db.query('SELECT username from users WHERE username = $1', [username]);
  return result.rows.length > 0;
};

export const createUser = async ({
  first_name,
  last_name,
  username,
  password,
  gender,
  email,
  phone,
}) => {
  const result = await db.query(
    'INSERT INTO users (first_name, last_name, username, password, gender, email, phone) VALUES ($1, $2, $3, $4, $5, $6,$7)',
    [first_name, last_name, username, password, gender, email, phone],
  );

  return result.rows[0];
};


export const findUserByUsername = async ({ username }) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);

  return result.rows[0];
};
