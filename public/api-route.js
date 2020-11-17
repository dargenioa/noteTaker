const fs = require("fs");
//const dbJSON = require("./assets/db/db.json");


module.exports = (app) => {

    //read JSON file

    fs.readFile('./assets/db/db.json', 'utf8', (error, data) => {
        error ? console.error(error) : console.log(JSON.parse(data));
        
    });
    
    app.get("/api/notes", function (req, res) {
        return res.json(data);
    });

    app.post("/api/notes", function (req, res) {

        let newNote = req.body;
        return res.json(newNote);

    });

    app.post("/api/notes/:id", function (req, res) {
// still working on

        res.json({ ok: true });
    });
};
