import express from "express";
import appFirebase from "../../db.js";
import { getDatabase } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const router = express.Router();
const db = getDatabase(appFirebase);

router.post("/login", async (req, res) => {
  const auth = getAuth();
  const email = req.body.email;
  const password = req.body.password;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res.status(200).json({message: true});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(400).send(errorMessage);
    });
});

export default router;
