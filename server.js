//our dependencies
const express = require("express");
const path = require("path");

//express setup
const app = express();
const PORT = process.env.PORT || 3001;

//boilerplate middleware data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET route handler for home page and notes page.
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes",function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"));
});


//server listening on port 3001
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});