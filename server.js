var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = proess.env.PORT || 8080;

var jsonParser = bodyParser.json();

var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type: "application/*+json" }));

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

app.use(bodyParser.text({ type: "text/html" }));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
