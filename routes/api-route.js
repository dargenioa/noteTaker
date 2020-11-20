const fs = require("fs");
const router = require("express").Router();
const dbJSON = require("../db/db.json");
//require uuid
//const uuid = require...

//npm i uuid

// //read JSON file
router.get("/api/notes", function (req, res) {
    //res.json(dbJSON);

    fs.readFile("./db/db.json", "utf8", (error, data) => {
        data = JSON.parse(data);
        console.log(data);
        res.json(data);

    });

});

router.post("/api/notes", function (req, res) {


    fs.readFile("./db/db.json", "utf8", (error, data) => {
        data = JSON.parse(data);
        //uuid
        let newNote = { id: 1, ...req.body };
        let allNotes = [...data, newNote];
        let jsonString = JSON.stringify(allNotes);

        fs.writeFile("./db/db.json", jsonString, (error, data) => {
            console.log(error);
             res.json({ ok: true });

        });

    });

});

router.delete("/api/notes/:id")
//uuid
//read file
//write file

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




