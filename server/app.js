import express from "express";
import appFirebase from "./db.js";
import dotenv from "dotenv";
import { getDatabase } from "firebase/database";
import login from "./api/auth/login.js";
import register from "./api/auth/register.js";
import profile from "./api/auth/profile.js";
import logout from "./api/auth/logout.js";
import addLock from "./api/userData/addLock.js";
dotenv.config();

const app = express();
const db = getDatabase(appFirebase);
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "../client/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "../client/login.html");
});

app.use("/api/auth", login);
app.use("/api/auth", register);
app.use("/api/auth", profile);
app.use("/api/auth", logout);

app.use("/api/userData", addLock);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
