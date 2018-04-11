var http = require("http");

var app = http.createServer(function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ studentid: 1, name: "Mukesh Singh" }));
});
app.listen(3001);
