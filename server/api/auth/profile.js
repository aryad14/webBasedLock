import express from "express";
import appFirebase from "../../db.js";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = express.Router();
const db = getDatabase(appFirebase);

router.get("/profile", async (req, res) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      res.status(200).send(uid);
    } else {
      res.status(400).send("No user is signed in.");
    }
  });
});

export default router;
