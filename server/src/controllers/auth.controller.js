import * as authService from '../services/auth.service';
import bcrypt from 'bcryptjs';
import HttpError from '../utils/HttpError';
import "dotenv/config";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, username, password, gender, email, phone } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    if (await authService.isUsernameExist({ username })) {
      res.status(400).json({
        message: 'Username already exists.',
      });
    }

    await authService.createUser({
      first_name,
      last_name,
      username,
      password: passwordHash,
      gender,
      email,
      phone,
    });

    res.status(201).json({
      message: 'User created.',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Unknown error.',
      error: err.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;


  if (!username || !password) {
    res.status(400).json({
      message: 'Failed to login.',
      error: 'Username or password not present.',
    });
  }
  try {
    const user = await authService.findUserByUsername({username});
    console.log('User:', user);
    if (!user) {
      return next(new HttpError('Username or password not correct.', 401));
      }
     const matchedPassword= await bcrypt.compare(password, user.password)


     if (!matchedPassword) {
      return next(new HttpError('Username or password not correct.', 401));
      }
      const payload = {
        id:user.id,
        username:user.username
        }

     const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "3h"});

      res.status(200).json({
        message: 'Login successful.',
        user,
        token,
      });
  } catch (err) {
    next(new HttpError(err.message));
  }
};
