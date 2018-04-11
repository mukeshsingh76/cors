var http = require("http");
var request = require("request");

var app = http.createServer(function(req, res) {
  res.setHeader("Content-Type", "application/json");

  request("http://localhost:3000", function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.write(body); //write a response to the client
      res.end(); //end the response
    }
  });
});
app.listen(4000);
