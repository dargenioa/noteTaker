const fs = require("fs");
const router = require("express").Router();
const dbJSON = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

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

// dbJSON.forEach(num => {
//     if (req.params.id == num.id) {
//         console.log(req.params);
//         dbJSON.splice()
//         let deletedFile = dbJSON.slice();
//         let newJSON = JSON.stringify(deletedFile)

//         fs.writeFile("./db/testdb.json", newJSON, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("Success!");
//         })
//     };

// });

//     });


// router.delete("/api/notes/:id", (req, res) => {

//     dbJSON.forEach((num, index) => {
//         if (req.params.id == num.id) {
//             dbJSON.splice(index, 1)
//             let deletedFile = dbJSON.slice();
//             let newJSON = JSON.stringify(deletedFile)

//             fs.writeFileSync("./db/db.json", newJSON, function (err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("Success!");
//             })
//         };

//     });
// });


// router.get("api/notes/:id", function (req, res) {



//     // router.delete("api/notes/:id" + id, function (req, res) {
//     //     console.log(dataDelete.id);

//     // });


// });



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




