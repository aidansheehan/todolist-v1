const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();
  var daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  res.render("index", {
    dayOfWeek: daysInWeek[today.getDay()],
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
