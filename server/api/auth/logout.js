import express from "express";
import appFirebase from "../../db.js";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = express.Router();
const db = getDatabase(appFirebase);

router.get("/auth/logout", async (req, res) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      res.status(200).send("User signed out.");
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});

export default router;
