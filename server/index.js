const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const itemRouter = require("./routes/itemRouter");
const authRouter = require("./routes/authRouter");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", itemRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
