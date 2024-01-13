import {
  findUserByID,
  findEmailAndToken,
  updateUserVerificationStatus,
} from '../services/users.service';
import 'dotenv/config';

export const get = async (req, res) => {
  const userID = req.params.id;

  const user = await findUserByID(userID);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: 'User not found.',
    });
  }
};

export const verifyEmail = async (req, res) => {
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
