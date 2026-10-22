var express = require("express");
var cors = require("cors");
var app = express();

// Allow the front-end to request data from this server.
app.use(cors());

var lessons = [
  { id: 1001, subject: "Maths", location: "London", price: 20, availability: 5, icon: "fa fa-calculator" },
  { id: 1002, subject: "Music", location: "Leeds", price: 25, availability: 5, icon: "fa fa-music" },
  { id: 1003, subject: "Art", location: "Oxford", price: 18, availability: 5, icon: "fa fa-paint-brush" }
];

// GET /lessons returns the lessons as JSON.
app.get("/lessons", function (request, response) {
  response.json(lessons);
});

// This MUST be the last route. It runs only if no route above matched.
app.use(function (request, response) {
  response.status(404);
  response.send("Page Not Found!");
});

app.listen(3001, function () {
  console.log("App started on port 3001");
});