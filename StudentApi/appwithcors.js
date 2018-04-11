var express = require("express");
var app = express();
var cors = require("cors");

var strudents = [
  {
    id: 1,
    name: "Mukesh 1",
    age: 43
  },
  {
    id: 2,
    name: "Jyoten 2",
    age: 35
  },
  {
    id: 3,
    name: "Abhilsh",
    age: 27
  }
];

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  console.log("Middleware cors executed");

  next();
});

app.get("/", function(req, res) {
  console.log("Called by user.. URL:" + req.path);
  res.send(JSON.stringify(strudents));
});

app.get("*", function(req, res) {
  console.log("Invalid path.. URL:" + req.path);
});

app.listen(3000);
