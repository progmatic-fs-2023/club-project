import bcrypt from 'bcryptjs';
import {
  deleteUserByID,
  findEmail,
  findEmailAndToken,
  findUserByID,
  listAllUsers,
  updateMembershipByID,
  updateNewPassword,
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
  console.log(password1);
  console.log(req.body);
  const user = await findEmail(email);
  // console.log(user);
  if (!user || email !== user.email) {
    res.status(404).send('Invalid email.');
    return;
  }

  // const secret = process.env.JWT_SECRET;

  try {
    // const payload = jwt.verify(token, secret);

    const hashedPassword = await bcrypt.hash(password1, 10);
    console.log(hashedPassword);
    user.password = hashedPassword;

    await updateNewPassword(email, user.password);
    console.log('Password updated successfully.');
    res.send();
  } catch (error) {
    console.log(`hiba: ${error.message}`);
    res.send(error.message);
  }
};

export {
  getUserById,
  putUserById,
  destroyUserById,
  list,
  updateMembership,
  verifyEmail,
  verifyNewPasswordEmail,
  verifyNewPasswords,
};
