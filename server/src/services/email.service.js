import nodemailer from 'nodemailer';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { findEmail } from './users.service';

// SEND VERIFICATION EMAIL
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'door8projekt@gmail.com',
    pass: process.env.GMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: false,
  },
});

const sendVerificationEmail = async (email, token) => {
  const mailOptions = {
    from: 'door8projekt@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `<p>Click <a href="http://localhost:5000/auth/register/confirm?email=${email}&token=${token}">here</a> to verify your email.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      // res.status(500).json({
      //   message: 'Error sending verification email.',
      //  error: error.message,
      // });
    } else {
      console.log(`Email sent: ${info.response}`);
      // res.status(200).json({
      //   message: 'Verification email sent.',
      // });
    }
  });
};

// SEND EMAIL FROM SITE
const welcomeContactUsEmail = async (req, res) => {
  const { nameInput, email, subject, message } = req.body;
  const contactEmail = 'door8projekt@gmail.com';

  const mailOptions = {
    from: contactEmail,
    to: contactEmail,
    subject,
    html: `<p>Name: ${nameInput}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('Message sent successfully!');
    }
  });
};

const sendNewPasswordEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await findEmail(email);

    if (!user || email !== user.email) {
      res.status(404).send('User not registered.');
      return;
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    const mailOptions = {
      from: 'door8projekt@gmail.com',
      to: email,
      subject: 'New Password link',
      html: `<p>Click <a href="http://localhost:5000/api/reset-password?email=${email}&token=${token}">here</a> to reset your password.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending verification email.');
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).send('Verification email sent.');
      }
    });
  } catch (error) {
    console.error('Error in sendNewPasswordEmail:', error);
    res.status(500).send('Internal Server Error.');
  }
};

const sendEventBookingEmail = async (email, eventName, eventTime) => {
  const mailOptions = {
    from: 'door8projekt@gmail.com',
    to: email,
    subject: 'Booking Event Confirmation',
    html: `
    <p>Thank you for booking the event!</p>
    <p><strong>Event:</strong> ${eventName}</p>
    <p><strong>Date of the event:</strong> ${eventTime}</p>
    <br />
    <p>We look forward to seeing you at the event!</p>
    <p>Best regards,</p>
    <p>The Event Team</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

export {
  sendVerificationEmail,
  welcomeContactUsEmail,
  sendNewPasswordEmail,
  sendEventBookingEmail,
};
