import * as db from './db.service';

// GET  ALL USERS
const listAllUsers = async () => {
  const response = await db.query(
    'SELECT id, first_name AS "firstName", last_name AS "lastName", username, gender, email, member_img AS "memberImg", membership, membership_start_time AS "membershipStartTime", membership_end_time AS "membershipEndTime", newsletter, email_token AS "emailToken", is_verified AS "isVerified", is_payed AS "isPayed", is_admin AS "isAdmin", password, phone FROM members ORDER BY ID',
  );
  return response.rows;
};

// IF THE USERNAME ALREADY EXISTS
const isUsernameExist = async username => {
  const result = await db.query('SELECT username from members WHERE username = $1', [username]);
  return result.rows.length > 0;
};

// CREATE USER
const createUser = async ({
  firstName,
  lastName,
  username,
  gender,
  email,
  membership,
  newsletter,
  emailtoken,
  isverified,
  isPayed,
  isAdmin,
  password1,
  phoneNumber,
}) => {
  const result = await db.query(
    'INSERT INTO members (first_name, last_name, username, gender, email, membership, newsletter, email_token, is_verified, is_payed, is_admin, password, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
    [
      firstName,
      lastName,
      username,
      gender,
      email,
      membership,
      newsletter,
      emailtoken,
      isverified,
      isPayed,
      isAdmin,
      password1,
      phoneNumber,
    ],
  );

  return result.rows[0];
};

// GET USER BY NAME
const findUserByUsername = async username => {
  const result = await db.query(
    'SELECT * FROM members WHERE username = $1 AND is_verified = true',
    [username],
  );

  return result.rows[0];
};

// GET USER BY ID
const findUserByID = async id => {
  const response = await db.query(
    'SELECT id, first_name AS "firstName", last_name AS "lastName", username, gender, email, member_img AS "memberImg", membership, membership_start_time AS "membershipStartTime", membership_end_time AS "membershipEndTime", newsletter, email_token AS "emailToken", is_verified AS "isVerified", is_payed AS "isPayed", is_admin AS "isAdmin", password, phone FROM members WHERE id=$1',
    [id],
  );
  return response.rows[0];
};

// GET USER BY EMAIL AND TOKEN
const findEmailAndToken = async (email, token) => {
  const result = await db.query('SELECT * FROM members WHERE email = $1 AND email_token = $2', [
    email,
    token,
  ]);

  return result.rows[0];
};

// UPDATE VERIFICATION STATUS
const updateUserVerificationStatus = async (userId, isverified) => {
  const result = await db.query('UPDATE members SET is_verified = $1 WHERE id = $2', [
    isverified,
    userId,
  ]);

  return result.rows[0];
};

export {
  isUsernameExist,
  createUser,
  findUserByUsername,
  findUserByID,
  findEmailAndToken,
  updateUserVerificationStatus,
  listAllUsers,
};
