const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

let mattText = {"id": -1, "message": "Placeholder Message"};

app.use(function (req, res, next) {
  express.json();
  express.static(path.join(__dirname, "build"));
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/", function (req, res) {
  res.send("This is the homepage for my love box");
});

app.get("/users/matt/getMessage", function (req, res) {
  res.send(mattText);
});

app.get("/users/rayanne", function (req, res) {
  res.send("You are Rayanne");
});

app.post("/users/matt/sendMessage", function (req, res) {
  mattText = req.body;
  console.log("Setting matt's text to ");
  console.log(req.body);
});

app.listen(process.env.PORT || 5000);
