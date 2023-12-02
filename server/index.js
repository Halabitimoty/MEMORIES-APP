const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
const session = require("express-session");
const dbsession = require("connect-mongodb-session")(session);

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const database = mongoose.connect(process.env.MONGO_DB_URL);
const dbstore = new dbsession({
  uri: process.env.MONGO_DB_URL,
  collection: "sessions",
});

database
  .then(() => {
    console.log("db-connected");
  })
  .catch((error) => {
    console.log("db-not-connected");
  });

const authroute = require("./app/routes/auth/auth");

app.use(
  session({
    secret: process.env.session,
    resave: false,
    saveUninitialized: false,
    store: dbstore,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/v1/auth", authroute);

app.get("/", (req, res) => {
  res.send("Memory App");
});

app.listen(port, () => {
  console.log(`Memory Api url =>> http://localhost:${port}`);
});
