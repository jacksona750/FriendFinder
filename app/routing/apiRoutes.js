var friendData = require("../data/friends")

module.exports = function(app) {


// Display all friend possibilities
app.get("/api/friends", function(req, res) {
    return res.json(friendData);
});

// Create new friend based on form input
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friendData.push(newFriend);

    res.json(newFriend)
});

}