//our dependencies
const express = require("express");
const path = require("path");
const htmlRoute = require("./routes/html-route");
const apiRoute = require("./routes/api-route");
///const fs = require("fs");


//express setup
const app = express();
const PORT = process.env.PORT || 3001;

//boilerplate middleware data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
console.log(__dirname);


app.use("/", htmlRoute);
app.use("/api", apiRoute);

// require("./routes/html-route")(app);
// require("./routes/api-route")(app);




//server listening on port 3001
app.listen(PORT, function(){
    console.log("Server listening on PORT:" + PORT);
});