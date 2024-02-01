import bcrypt from 'bcryptjs';
import {
  deleteUserByID,
  findEmail,
  findEmailAndToken,
  findUserByID,
  listAllUsers,
  updateMembershipByID,
  updateNewPassword,
  updatePaymentByID,
  updateUserVerificationStatus,
  updateUserByID,
} from '../services/users.service';
import 'dotenv/config';
import HttpError from '../utils/HttpError';

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

// UPDATE IS_PAYED BY ID
const putIsPaymentById = async (req, res) => {
  const { id } = req.params;
  const isPayed = req.query.newIsPayed;

  try {
    const user = await updatePaymentByID(id, isPayed);
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

// UPDATE USER'S MEMBERSHIP
const updateMembership = async (req, res) => {
  const { id, membership } = req.body;

  try {
    const updatedMembership = await updateMembershipByID(id, membership);
    if (updatedMembership) {
      res.json(updatedMembership);
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

  const user = await findEmail(email);

  if (!user || email !== user.email) {
    res.status(404).send('Invalid email.');
    return;
  }

  try {
    res.redirect(`http://localhost:5173/newpasswordpage?email=${email}`);
  } catch (error) {
    next(new HttpError(error.message));
  }
};

const verifyNewPasswords = async (req, res) => {
  const { password1, email } = req.body;

  const user = await findEmail(email);

  if (!user || email !== user.email) {
    res.status(404).send('Invalid email.');
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password1, 10);
    user.password = hashedPassword;

    await updateNewPassword(email, user.password);
    console.log('Password updated successfully.');
    res.send();
  } catch (error) {
    console.log(`hiba: ${error.message}`);
    res.send(error.message);
  }
};

// GET USER BY ID (HEADER)

const getUserByIdHeader = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    if (token === 'null') {
      const tokenNullUser = {
        id: null,
        firstName: null,
        lastName: null,
        username: null,
        gender: null,
        email: null,
        memberImg: null,
        membership: null,
        membershipStartTime: null,
        membershipEndTime: null,
        newsletter: null,
        isVerified: null,
        isPayed: null,
        isAdmin: null,
        password: null,
        phone: null,
      };

      return res.json(tokenNullUser);
    }

    const user = await findUserByID(token);

    if (user) {
      return res.json(user);
    }
    return res.status(404).json({ message: 'User does not exist' });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export {
  getUserById,
  destroyUserById,
  list,
  putIsPaymentById,
  putUserById,
  updateMembership,
  verifyEmail,
  verifyNewPasswordEmail,
  verifyNewPasswords,
  getUserByIdHeader,
};
