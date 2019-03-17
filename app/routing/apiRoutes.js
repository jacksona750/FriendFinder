// Display all friend possibilities
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// Create new friend based on form input
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

app.listen(PORT, function() {
    console.log("App listeing on PORT " + PORT);
});