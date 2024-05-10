import express from "express";
import appFirebase from "./db.js";
import dotenv from "dotenv";
import path from "path";
import { getDatabase } from "firebase/database";
import cors from "cors";

import login from "./api/auth/login.js";
import register from "./api/auth/register.js";
import profile from "./api/auth/profile.js";
import logout from "./api/auth/logout.js";

import addLock from "./api/userData/addLock.js";
import unlock from "./api/userData/unlock.js";
import getLocks from "./api/userData/getLocks.js";

dotenv.config();
const app = express();
const db = getDatabase(appFirebase);
const port = process.env.PORT;

app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }

));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

app.use("/api/auth", login);
app.use("/api/auth", register);
app.use("/api/auth", profile);
app.use("/api/auth", logout);

app.use("/api/userData", addLock);
app.use("/api/userData", unlock);
app.use("/api/userData", getLocks);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
