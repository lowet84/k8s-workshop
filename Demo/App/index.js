var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Demo!");
});

app.listen(8080);
