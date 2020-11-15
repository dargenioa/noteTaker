const path = require("path");

const htmlRoute = (app) => {

// GET route handler for home page and notes page.
app.get("/notes",function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"));
});
app.get("*",function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
    
};


module.exports = htmlRoute(app);