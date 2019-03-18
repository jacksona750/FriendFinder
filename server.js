// Dependencies
var express = require("express");

// Setting up the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listeing on PORT http://localhost:" + PORT);
});