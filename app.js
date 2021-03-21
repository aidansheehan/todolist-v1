const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  var today = new Date();
  const options = { weekday: "long" }

  var day = today.toLocaleString("en-US", options);

  res.render("index", {
    kindOfDay: day, listItems: items }
  );
})

var items = [];

app.post("/", function(req, res) {
  items.push(req.body.newItem);
  console.log(items);
  res.redirect("/");
})

app.listen(3000, function() {
  console.log("listening at port 3000");
})
