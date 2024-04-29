import express from "express";
import appFirebase from "../../db.js";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const router = express.Router();
const db = getFirestore(appFirebase);

router.post("/addLock", async (req, res) => {
  const auth = getAuth(appFirebase);
  const user = auth.currentUser;

  // Check if the user is logged in
  if (user) {
    // Reference to the user's document in the Firestore database
    const userDoc = doc(db, "users", user.uid);

    // Store user information
    setDoc(userDoc, {
      email: user.email,
      name: "User Name New Test",
      other_info: "Other user-related information",
      age: "20"
    })
    .then(() => {
      console.log("User information stored successfully!");
      res.json({ message: 'User information stored successfully!' });
    })
    .catch((error) => {
      console.error("Error storing user information:", error);
      res.status(500).json({ error: 'Error storing user information' });
    });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

export default router;
