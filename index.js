import express from "express";
import dotenv from "dotenv";
import emailRouter from "./src/routes/email-router.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", emailRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
