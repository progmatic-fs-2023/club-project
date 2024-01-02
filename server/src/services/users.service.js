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
  isverified,
  emailtoken,
}) => {
  const result = await db.query(
    'INSERT INTO users (first_name, last_name, username, password, gender, email, phone, isverified, emailtoken) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [first_name, last_name, username, password, gender, email, phone, isverified, emailtoken],
  );

  return result.rows[0];
};

export const findUserByUsername = async ({ username }) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1 AND is_verified = true', [
    username,
  ]);

  return result.rows[0];
};

export const findUserByID = async ({ id }) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);

  return result.rows[0];
};

export const findEmailAndToken = async (email, token) => {
  const result = await db.query('SELECT * FROM users WHERE email = $1 AND email_token = $2', [
    email,
    token,
  ]);

  return result.rows[0];
};

export const updateUserVerificationStatus = async (userId, isVerified) => {
  const result = await db.query('UPDATE users SET is_verified = $1 WHERE id = $2', [
    isVerified,
    userId,
  ]);
};
