const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];

app.get("/", function(req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let day = today.toLocaleString("en-US", options);

  res.render("index", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {

  items.push(req.body.newItem);

  res.redirect("/");

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
