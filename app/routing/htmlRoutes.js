var path = require("path");

module.exports = function(app) {

// Basic route to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Route to survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}