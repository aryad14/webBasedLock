import express from "express";
import appFirebase from "../db.js";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { v4 as uuid } from "uuid";

const router = express.Router();
const db = getDatabase(appFirebase);

router.post("/register", async (req, res) => {
  const data = await req.body;
  try {
    await set(ref(db, "users/" + uuid()), {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.mail,
      password: data.pass,
    });
    res.status(200).json(res.body);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
});

export default router;
