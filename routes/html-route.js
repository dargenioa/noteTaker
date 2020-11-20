const path = require("path");
const router = require("express").Router();
//const fs = require("fs");


router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;

// module.exports = function (app) {

//     // GET route handler for home page and notes page.
//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });


//     app.get("/notes", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/notes.html"));
//     });

//     app.get("*", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
// };


//       * GET `*` - Should return the `index.html` file
//       * The application should have a `db.json` file on the backend that will be used to
//       * store and retrieve notes using the `fs` module.
//       * 
// //uuid

