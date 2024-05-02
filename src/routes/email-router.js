import express from "express";
import { create } from "../controllers/email-controller.js";
const router = express.Router();

router.post("/", create);

export default router;
