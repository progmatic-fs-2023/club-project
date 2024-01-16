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

// DELETE USER BY ID
const deleteUserByID = async id => {
  const response = await db.query('DELETE FROM members WHERE id = $1 RETURNING *', [id]);
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

// UPDATE A USER BY ID
const updateUserByID = async (id, modifiedMember) => {
  const result = await db.query(
    'UPDATE members SET first_name = $2, last_name = $3, username = $4, gender = $5, email = $6, member_img = $7, membership = $8, membership_start_time = $9, membership_end_time = $10, newsletter = $11, email_token = $12, is_verified = $13, is_payed = $14, is_admin = $15, password = $16, phone = $17 WHERE id = $1 RETURNING *',
    [
      id,
      modifiedMember.firstName,
      modifiedMember.lastName,
      modifiedMember.username,
      modifiedMember.gender,
      modifiedMember.email,
      modifiedMember.memberImg,
      modifiedMember.membership,
      modifiedMember.membershipStartTime,
      modifiedMember.membershipEndTime,
      modifiedMember.newsletter,
      modifiedMember.emailToken,
      modifiedMember.isVerified,
      modifiedMember.isPayed,
      modifiedMember.isAdmin,
      modifiedMember.password,
      modifiedMember.phone,
    ],
  );

  const renamedResult = {
    id: result.rows[0].id,
    firstName: result.rows[0].first_name,
    lastName: result.rows[0].last_name,
    username: result.rows[0].username,
    gender: result.rows[0].gender,
    email: result.rows[0].email,
    memberImg: result.rows[0].member_img,
    membership: result.rows[0].membership,
    membershipStartTime: result.rows[0].membership_start_time,
    membershipEndTime: result.rows[0].membership_end_time,
    newsletter: result.rows[0].newsletter,
    emailToken: result.rows[0].email_token,
    isVerified: result.rows[0].is_verified,
    isPayed: result.rows[0].is_payed,
    isAdmin: result.rows[0].is_admin,
    password: result.rows[0].password,
    phone: result.rows[0].phone,
  };

  return renamedResult;
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
  deleteUserByID,
  findEmailAndToken,
  updateUserVerificationStatus,
  listAllUsers,
  updateUserByID,
};
