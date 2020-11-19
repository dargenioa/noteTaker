const fs = require("fs");
const router = require("express").Router();
const dbJSON = require("../db/db.json");

//npm i uuid

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500

// //read JSON file
router.get("/notes", function (req, res) {
    res.json(dbJSON);

});

router.post("/notes", function (req, res) {

    let newNote = { id: 1, ...req.body };
    let allNotes = [...dbJSON, newNote];
    console.log(allNotes);

    //dbJSON.push(newNote);
    console.log(dbJSON);
    let jsonString = JSON.stringify(allNotes);

    fs.writeFile("../db/db.json", jsonString, (error, data) => {
        error ? console.error(error) : console.log(JSON.parse(data))
        res.json({ ok: true });

    });
});

module.exports = router;


//module.exports = (app) => {

    // // //read JSON file
    // app.get("/notes", function (req, res) {
    //     res.json(dbJSON);

    // });

    // app.post("/notes", function (req, res) {

    //     let newNote = req.body;
    //     dbJSON.push(newNote);
    //     console.log(dbJSON);
    //     res.json({ ok: true });

    //     //Do we need write file?

    //     // let jsonString = JSON.stringify(dbJSON);

    //     // fs.writeFile("../db/db.json", jsonString, (error, data) => {
    //     //     error ? console.error(error) : console.log(JSON.parse(data))

    // });

        // app.post("/api/notes/:id", function (req, res) {
    //     // still working on

    //     res.json({ ok: true });
    // });




