// Connecting application to MongoDB

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

const dbName = "posts-db";
let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log("MongoDB Error " + err);

  // Store reference to databse
  db = client.db(dbName);
  console.log(`Connected to MondoDB: ${url}.`);
  console.log(`Database: ${dbName}.`);
});

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database.");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

// Backend server

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running..." });
});

let PORT = 8000;

require("./app/routes/app.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
