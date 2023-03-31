const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}

var day = today.toLocaleDateString("en-US", options);

var listOfItems = ["Buy food", "Cook food", "Eat food"];

app.get("/", function(req, res){
  res.render("index", {indexDay: day, itemsArray: listOfItems})
});

app.post("/", function(req, res){
  var newItem = req.body.newItem;
  listOfItems.push(newItem);
  res.redirect("/");
});


app.listen(3000, function(){
  console.log("Started on 3000.");
});
