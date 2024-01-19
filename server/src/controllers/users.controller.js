import {
  findUserByID,
  deleteUserByID,
  listAllUsers,
  findEmailAndToken,
  updateUserVerificationStatus,
  updateUserByID,
  findEmail,
  updateNewPassword
} from '../services/users.service';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// GET USER BY ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await findUserByID(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User does not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// UPDATE USER BY ID
const putUserById = async (req, res) => {
  const { id } = req.params;
  const { modifiedMember } = req.body;

  try {
    const user = await updateUserByID(id, modifiedMember);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User does not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// DELETE USER BY ID
const destroyUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await deleteUserByID(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User does not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// GET ALL USER
const list = async (req, res) => {
  try {
    const allUsers = await listAllUsers();
    if (allUsers) {
      res.json(allUsers);
    } else {
      res.status(404).json({ message: 'Users do not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// EMAIL VERIFICATION REGISTRATION
const verifyEmail = async (req, res) => {
  const { email } = req.query;
  const { token } = req.query;

  const user = await findEmailAndToken(email, token);

  if (user) {
    await updateUserVerificationStatus(user.id, true);

    return res.redirect('http://localhost:5173/landingpage');
  }
  return res.status(400).json({
    message: 'Invalid Email or Token.',
  });
};

// EMAIL VERIFICATION LOGIN NEW PASSWORD
const verifyNewPasswordEmail = async (req, res, next) => {
  const { email } = req.query;
  const { token } = req.query;

  const user = await findEmail(email);

  if (!user || email !== user.email) {
    res.status(404).send("Invalid email.");
    return;
  }

  const secret = process.env.JWT_SECRET;

  try {
    const payload = jwt.verify(token, secret);
    return res.redirect(`http://localhost:5173/newpasswordpage?email=${(email)}`);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const verifyNewPasswords = async (req, res, next) => {
  const { newPassword, confirmPassword, email } = req.body;
console.log( req.body)
  const user = await findEmail(email);

  if (!user || email !== user.email) {
    res.status(404).send("Invalid email.");
    return;
  }

  //const secret = process.env.JWT_SECRET;

  try {
    //const payload = jwt.verify(token, secret);
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;


  await updateNewPassword(email, user.password);
  console.log('Password updated successfully.');
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

export { list, getUserById, putUserById, destroyUserById, verifyEmail, verifyNewPasswordEmail, verifyNewPasswords };
