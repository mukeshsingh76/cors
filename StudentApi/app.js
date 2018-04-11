var express = require("express");
var app = express();

var strudents = [
  {
    id: 1,
    name: "Mukesh",
    age: 43
  },
  {
    id: 2,
    name: "Jyoten",
    age: 35
  },
  {
    id: 3,
    name: "Abhilsh",
    age: 27
  }
];

app.get("/", function(req, res) {
  console.log("Called by user.. URL:" + req.path);
  res.send(JSON.stringify(strudents));
});

app.get("*", function(req, res) {
  console.log("Invalid path.. URL:" + req.path);
});

app.listen(3000);
