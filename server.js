var express = require("express");
var cors = require("cors");
var app = express();

// CORS must come before the other app.use so the front-end is allowed to fetch data.
app.use(cors());

// Lessons data (no image files). Field names match what index.html expects.
var lessons = [
  { id: 1001, subject: "Maths", location: "London", price: 20, availability: 5, icon: "fa fa-calculator" },
  { id: 1002, subject: "Music", location: "Leeds", price: 25, availability: 5, icon: "fa fa-music" },
  { id: 1003, subject: "Art", location: "Oxford", price: 18, availability: 5, icon: "fa fa-paint-brush" }
];

// Respond to every request with the lessons as JSON.
app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.json(lessons);
});

// Port 3001 matches the URL in fetchData in index.html.
app.listen(3001, function () {
  console.log("App started on port 3001");
});