//our dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");


//express setup
const app = express();
const PORT = process.env.PORT || 3001;

//boilerplate middleware data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

require("./html-route")(app);
require("./api-route")(app);



//server listening on port 3001
app.listen(PORT, function(){
    console.log("Server listening on PORT:" + PORT);
});