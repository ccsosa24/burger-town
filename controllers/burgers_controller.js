var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
 
  burger.SelectAll(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burger/create", function(req, res) {
  
  burger.SelectCreate(req.body.burger_name, function(result) {
   
    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/:id", function(req, res) {
  console.log("+++++++++")
  console.log(req.params.id)
  console.log("___________")
  burger.updateOne(req.params.id, function(result) {
    
    console.log(result);
   
    res.sendStatus(200);
  });
});

module.exports = router;
