var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

var lessons = [
  { id: 1, subject: "Computer Science", location: "Hendon", price: 25, spaces: 5 },
  { id: 2, subject: "Maths", location: "London", price: 20, spaces: 5 },
  { id: 3, subject: "English", location: "Leeds", price: 18, spaces: 5 }
];

app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.json(lessons);
});

app.listen(3001, function() {
  console.log("App started on port 3001");
});