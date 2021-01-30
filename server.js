// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/hey', (request, response) => {
  console.log("Hello");
  response.json({ hello: "world" });
});



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Listener
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
