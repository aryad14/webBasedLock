import express from "express";
import appFirebase from "../../db.js";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const router = express.Router();
const db = getFirestore(appFirebase);

router.get("/getLocks", async (req, res) => {
    const auth = getAuth(appFirebase);
    const user = auth.currentUser;

    try {
        if (user) {
            const userCollection = collection(db, "users", user.uid, "lockers");
            const querySnapshot = await getDocs(userCollection);
            const lockers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.status(200).json(lockers);
        } else {
            res.status(401).json({ error: 'Not authenticated' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;
