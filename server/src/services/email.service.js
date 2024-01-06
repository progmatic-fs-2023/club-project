import nodemailer from 'nodemailer';
import 'dotenv/config';

// PostgreSQL adatbázis kapcsolódási információk
/* const dbClient = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_USER_PASSWORD,
  port: process.env.DB_PORT,
}); */

// E-mail küldési beállítások
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info.door8projekt@gmail.com',
    pass: process.env.GMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: false, // Ne ellenőrizze a tanúsítványt
  },
});

export const sendVerificationEmail = async (email, token) => {
  const mailOptions = {
    from: 'info.door8projekt@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `<p>Click <a href="http://localhost:3000/auth/register/confirm?email=${email}&token=${token}">here</a> to verify your email.</p>`,
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
