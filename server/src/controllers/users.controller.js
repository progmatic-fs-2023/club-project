import { findUserByID, findEmailAndToken, updateUserVerificationStatus } from '../services/users.service';
import "dotenv/config";


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
  const email = req.query.email;
  const token = req.query.token;

  const user = await findEmailAndToken(email, token);

  if (user) {

    await updateUserVerificationStatus(user.id, true);

    res.status(200).json({
      message: 'Registration is confirmed.',
    });

  } else {
    res.status(400).json({
      message: 'Invalid Email or Token.',
    });
  }
};
    