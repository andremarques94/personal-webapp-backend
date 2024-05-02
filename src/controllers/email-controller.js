import { sendEmail } from "../services/email-service.js";

export async function create(req, res) {
  const data = await sendEmail(req.body);
  return data.error
    ? res.status(500).json({ msg: data.error })
    : res.status(201).json(data);
}
