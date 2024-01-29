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
      res.send();
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

const sendEventBookingEmail = async (email, eventName, eventStartTime, eventEndTime) => {
  const startDate = new Date(eventStartTime).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const endDate = new Date(eventEndTime).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const formattedTimeRange = `${startDate} - ${endDate}`;

  const mailOptions = {
    from: 'door8projekt@gmail.com',
    to: email,
    subject: 'Booking Event Confirmation',
    html: `
    <p>Thank you for booking the event!</p>
    <p><strong>Event:</strong> ${eventName}</p>
    <p><strong>Date of the event:</strong> ${formattedTimeRange}</p>
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
const sendServiceBookingEmail = async (email, serviceName, serviceStartTime, serviceEndTime) => {
  const startDate = new Date(serviceStartTime).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const endDate = new Date(serviceEndTime).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const formattedTimeRange = `${startDate} - ${endDate}`;

  const mailOptions = {
    from: 'door8projekt@gmail.com',
    to: email,
    subject: 'Booking Service Confirmation',
    html: `
    <p>Thank you for booking our service!</p>
<p><strong>Service:</strong> ${serviceName}</p>
<p><strong>Date of the service:</strong> ${formattedTimeRange}</p>
<br />
<p>We appreciate your reservation and look forward to providing you with an excellent service experience!</p>
<p>Should you have any questions or need further assistance, feel free to contact us.</p>
<br />
<p>Best regards,</p>
<p>The Service Team</p>
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
  sendServiceBookingEmail,
};
