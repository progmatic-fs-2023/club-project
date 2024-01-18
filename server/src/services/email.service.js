import nodemailer from 'nodemailer';
import 'dotenv/config';
import crypto from 'crypto';

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
  console.log(mailOptions);

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

const sendNewPasswordEmail = async req => {
  const { email } = req.body;
  const token = crypto.randomBytes(32).toString('hex');

  const mailOptions = {
    from: 'door8projekt@gmail.com',
    to: email,
    subject: 'New Password link',
    html: `<p>Click <a href="http://localhost:5000/api/reset-password?email=${email}&token=${token}">here</a> to reset your password.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      // res.status(500).json({
      //   message: 'Error sending verification email.',
      //   error: error.message,
      // });
    } else {
      console.log(`Email sent: ${info.response}`);
      // res.status(200).json({
      //   message: 'Verification email sent.',
      // });
    }
  });
};

export { sendVerificationEmail, welcomeContactUsEmail, sendNewPasswordEmail };
