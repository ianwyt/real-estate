// import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Set up your email configuration (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

interface SendWelcomeEmailData {
  email: string;
}

export const sendWelcomeEmail = functions.https.onCall(
  async (data: SendWelcomeEmailData, context: functions.https.CallableContext) => {
    const email = data.email;

    const mailOptions = {
      from: 'gumskull2001@gmail.com',
      to: email,
      subject: 'Welcome to the Real Estate Newsletter!',
      text: 'Thank you for subscribing to our newsletter. Stay tuned for the latest real estate insights and updates!',
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent to:', email);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
);
