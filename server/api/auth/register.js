import express from "express";
import appFirebase from "../../db.js";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const router = express.Router();
const db = getDatabase(appFirebase);

router.post("/register", async (req, res) => {
  const auth = getAuth();
  const username = req.body.username;
  const email = req.body.email;
  const contact = req.body.contact;
  const password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const db_ref = ref(db, "users/" + user.uid);
      set(db_ref, {
        username,
        contact,
        email,
        uid: user.uid
      });
      res.status(200).json({ message: true });
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});

export default router;