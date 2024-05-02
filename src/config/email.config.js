import dotenv from "dotenv";
dotenv.config();

export default {
  service: "gmail", // your email domain
  auth: {
    user: process.env.GMAIL_APP_USERNAME, // your email address
    pass: process.env.GMAIL_APP_PASSWORD, // your password
  },
};
