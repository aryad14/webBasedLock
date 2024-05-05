import express from "express";
import appFirebase from "../../db.js";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const router = express.Router();
const db = getDatabase(appFirebase);

router.post("/register", async (req, res) => {
  const auth = getAuth();
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const db_ref = db.ref("users/" + user.uid);
      db_ref.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        uid: user.uid
      });
      res.status(200).json({ message: true, uid: user.uid, email: user.email });
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});

export default router;
