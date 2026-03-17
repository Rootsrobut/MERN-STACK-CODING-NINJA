require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const user = {
  name: 'Sumit Kumar',
  email: 'sumit@example.com',
  plan: 'Premium',
};

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'laxmibgs7667@gmail.com',
  subject: `Welcome to DigiSaarthi, ${user.name}!`,
  text:'This file was created dynamically.',
  html: `
    <div style="font-family:sans-serif; line-height:1.5;">
      <h2>Hello, ${user.name} 👋</h2>
      <p>Thanks for signing up with the <strong>${user.plan}</strong> plan.</p>
      <p>We’re excited to have you onboard! 🚀</p>
      <footer style="margin-top:20px; font-size:12px; color:#888;">
        — Team DigiSaarthi
      </footer>
    </div>
  `,
  attachments: [
    {
      filename: 'poster 3.png',
      path: 'F:\MERN\NodeJS\nodemailer-practice\poster 3.png', 
    },
  ],
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) return console.error('Error sending email:', err);
  console.log('Email sent successfully:', info.response);
});
