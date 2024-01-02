import * as userService from '../services/users.service';
import bcrypt from 'bcryptjs';
import HttpError from '../utils/HttpError';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import crypto from "crypto";
import * as emailService from '../services/email.service';


export const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, username, password, gender, email, phone} = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    if (await userService.isUsernameExist({ username })) {
      res.status(400).json({
        message: 'Username already exists.',
      });
    }

    const emailtoken = crypto.randomBytes(64).toString("hex");

    await userService.createUser({
      first_name,
      last_name,
      username,
      password: passwordHash,
      gender,
      email,
      phone,
      isverified: false,
      emailtoken
    });

    await emailService.sendVerificationEmail(email, emailtoken);
  
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
    const user = await userService.findUserByUsername({ username });
    console.log('User:', user);
    if (!user) {
      return next(new HttpError('Username or password not correct.', 401));
    }
    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      return next(new HttpError('Username or password not correct.', 401));
    }
    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' });

    res.cookie("jwt", token, {
      httpOnly:true,
      maxAge : 3 * 60 * 60 * 1000,
    })

    res.status(200).json({
      message: 'Login successful.',
      user,
    });
  } catch (err) {
    next(new HttpError(err.message));
  }
};


