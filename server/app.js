import express from "express";
import appFirebase from "./db.js";
import { getDatabase } from "firebase/database";
// import login from "./api/login.js";
import register from "./api/register.js";
// import profile from "./api/profile.js";

const app = express();
const db = getDatabase(appFirebase);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("../client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "../client/index.html");
});

// app.use("/api", login);
app.use("/api", register);
// app.use("/api", profile);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
