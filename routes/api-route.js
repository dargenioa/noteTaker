const fs = require("fs");
const router = require("express").Router();
const dbJSON = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

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
        const id = uuidv4();
        let newNote = { id, ...req.body };
        let allNotes = [...data, newNote];
        let jsonString = JSON.stringify(allNotes);

        fs.writeFile("./db/db.json", jsonString, (error, data) => {
            console.log(error);
            res.json({ ok: true });

        });

    });

});

router.delete("/api/notes/:id", (req, res) => {

    fs.readFile("./db/db.json", "utf8", (error, data) => {
        const deleteData = JSON.parse(data);
        const newJSON = deleteData.filter(num => req.params.id !== num.id);
        const writeFileJSON = JSON.stringify(newJSON);

        fs.writeFile("./db/db.json", writeFileJSON, (error, data) => {
            console.log(error);
            res.json({ ok: true });

        });

    });

});



module.exports = router;

