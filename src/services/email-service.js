import emailConfig from "../config/email.config.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function sendEmail({ email, subject, text }) {
  const transporter = nodemailer.createTransport(emailConfig);
  const message = {
    to: process.env.GMAIL_APP_USERNAME,
    subject: subject,
    html: `
    <h1>Message from ${email}</h1>
    <b>${text}</b>`,
  };

  try {
    const info = await transporter.sendMail(message);
    return {
      msg: "Email sent",
      info: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    };
  } catch (err) {
    return {
      error: err,
    };
  }
}
