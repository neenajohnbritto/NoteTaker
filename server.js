var express = require("express");
const bodyParser = require("body-parser");
var htmlRoutes = require("./routes/html-routes");
var apiRoutes = require("./routes/api-routes");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.json());
app.use(express.static("public"));

app.use("/api",apiRoutes);
app.use("/",htmlRoutes);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});