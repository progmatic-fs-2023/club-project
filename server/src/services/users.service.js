import * as db from './db.service';

export const isUsernameExist = async username => {
  const result = await db.query('SELECT username from members WHERE username = $1', [username]);
  return result.rows.length > 0;
};

export const createUser = async ({
  firstName,
  lastName,
  username,
  password1,
  gender,
  email,
  phoneNumber,
  isverified,
  emailtoken,
  newsletter,
}) => {
  const result = await db.query(
    'INSERT INTO members (first_name, last_name, username, password, gender, email, phone, is_verified, email_token, newsletter) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
    [
      firstName,
      lastName,
      username,
      password1,
      gender,
      email,
      phoneNumber,
      isverified,
      emailtoken,
      newsletter,
    ],
  );

  return result.rows[0];
};

export const findUserByUsername = async username => {
  const result = await db.query(
    'SELECT * FROM members WHERE username = $1 AND is_verified = true',
    [username],
  );

  return result.rows[0];
};

export const findUserByID = async ({ id }) => {
  const result = await db.query('SELECT * FROM members WHERE id = $1', [id]);

  return result.rows[0];
};

export const findEmailAndToken = async (email, token) => {
  const result = await db.query('SELECT * FROM members WHERE email = $1 AND email_token = $2', [
    email,
    token,
  ]);

  return result.rows[0];
};

export const updateUserVerificationStatus = async (userId, isverified) => {
  const result = await db.query('UPDATE members SET is_verified = $1 WHERE id = $2', [
    isverified,
    userId,
  ]);

  return result.rows[0];
};
