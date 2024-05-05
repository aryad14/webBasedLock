import express from "express";
import appFirebase from "../../db.js";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const router = express.Router();
const db = getFirestore(appFirebase);

router.post("/unlock", async (req, res) => {
  
});

export default router;
