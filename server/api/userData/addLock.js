import express from "express";
import appFirebase from "../../db.js";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const router = express.Router();
const db = getFirestore(appFirebase);

router.post("/addLock", async (req, res) => {
  const auth = getAuth(appFirebase);
  const user = auth.currentUser;

  try {
    if (user) {
      const userCollection = collection(db, "users", user.uid, "lockers");

      const title = req.body.title;
      const description = req.body.description;
      const location = req.body.location;

      addDoc(userCollection, {
        email: user.email,
        title,
        description,
        location,
      })
        .then(() => {
          res.json({ message: 'User information stored successfully!' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Error storing user information' });
        });
    } else {
      res.status(401).json({ error: 'Not authenticated' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
