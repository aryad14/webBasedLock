import express from "express";
import appFirebase from "../../db.js";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

const router = express.Router();
const db = getDatabase(appFirebase);

router.post("/addLock", async (req, res) => {
  const auth = getAuth(appFirebase);
  const user = auth.currentUser;

  // Check if the user is logged in
  if (user) {
    // Reference to the user's node in the database
    const userRef = ref(db, "users/" + user.uid);

    // Store user information
    set(userRef, {
      email: user.email,
      name: "User Name",
      other_info: "Other user-related information",
    })
      .then(() => {
        console.log("User information stored successfully!");
        res.json({ message: "User information stored successfully!" });
      })
      .catch((error) => {
        console.error("Error storing user information:", error);
        res.status(500).json({ error: "Error storing user information" });
      });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

export default router;
