const fs = require("fs");
const dbJSON = require("../db/db.json");

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500

module.exports = (app) => {

    // //read JSON file
    app.get("/api/notes", function (req, res) {
        res.json(dbJSON);

    });

    app.post("/api/notes", function (req, res) {

        let newNote = req.body;
        dbJSON.push(newNote);
        console.log(dbJSON);
        res.json({ ok: true });
        // let jsonString = JSON.stringify(dbJSON);

        // fs.writeFile("../db/db.json", jsonString, (error, data) => {
        //     error ? console.error(error) : console.log(JSON.parse(data))

    });


};


    // app.post("/api/notes/:id", function (req, res) {
    //     // still working on

    //     res.json({ ok: true });
    // });