const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  var today = new Date();
  var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  res.render("index", {
    kindOfDay: today.toLocaleDateString("en-US", options),
  });

});

app.post("/", function(req, res) {
  console.log(req.body.newItem);
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
