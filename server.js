var express = require("express");
var cors = require("cors");
var app = express();

// 1. Allow the front-end to request data from this server.
app.use(cors());

// 2. Logger: prints every incoming request, then passes it on.
app.use(function (request, response, next) {
  console.log("Incoming " + request.method + " request to " + request.url);
  next();
});

var lessons = [
  { id: 1001, subject: "Maths", location: "London", price: 20, availability: 5, icon: "fa fa-calculator" },
  { id: 1002, subject: "Music", location: "Leeds", price: 25, availability: 5, icon: "fa fa-music" },
  { id: 1003, subject: "Art", location: "Oxford", price: 18, availability: 5, icon: "fa fa-paint-brush" }
];

// 3. GET /lessons returns the lessons as JSON.
app.get("/lessons", function (request, response) {
  response.json(lessons);
});

// 4. LAST: runs only if no route above answered.
app.use(function (request, response) {
  response.status(404);
  response.send("Page Not Found!");
});

app.listen(3001, function () {
  console.log("App started on port 3001");
});