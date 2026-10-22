var express = require("express");
var cors = require("cors");
var path = require("path");
var app = express();

// 1. Allow the front-end to request data from this server.
app.use(cors());

// 2. Logger: prints every incoming request, then passes it on.
app.use(function (request, response, next) {
  console.log("Incoming " + request.method + " request to " + request.url);
  next();
});

var lessons = [
  { id: 1001, subject: "Maths", location: "London", price: 20, availability: 5, icon: "fa fa-calculator", image: "maths.jpg" },
  { id: 1002, subject: "Music", location: "Leeds", price: 25, availability: 5, icon: "fa fa-music", image: "music.jpg" },
  { id: 1003, subject: "Art", location: "Oxford", price: 18, availability: 5, icon: "fa fa-paint-brush", image: "art.jpg" }
];

// 3. GET /lessons returns the lessons as JSON.
app.get("/lessons", function (request, response) {
  response.json(lessons);
});

// 4. Static file middleware: serves files from the workspace "Images" folder.
var imagePath = path.resolve(__dirname, "..", "Images");
app.use("/images", express.static(imagePath));

// 4b. Backward-compatible alias for the expected URL.
app.get("/images/maths.jpg", function (request, response) {
  response.sendFile(path.join(imagePath, "math.jpg"));
});

// 5. Runs only if no image matched above, so the file does not exist.
app.use("/images", function (request, response) {
  response.status(404);
  response.send("Image not found!");
});

// 6. LAST: runs only if nothing above answered.
app.use(function (request, response) {
  response.status(404);
  response.send("Page Not Found!");
});

app.listen(3001, function () {
  console.log("App started on port 3001");
});