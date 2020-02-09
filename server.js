var express = require("express");
var exphbs = require("express-handlebars");
var connection = require("./config/connection");
var bodyParser = require("body-parser");
var app = express();

var PORT  = process.env.PORT || 3000;

//app.use(express.static(__dirname,));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//app.use('/', require('./controllers/burgers_controller'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars")

//app.use(bodyParser.json());

app.engine("handlebars", exphbs({ dafaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);

});