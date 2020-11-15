const fs = require("fs");
const dbJSON = require("../data/db.json");

module.exports = (app) => {
    app.get("/api/notes", function(req, res) {
    return res.json(dbJSON);
});
};

