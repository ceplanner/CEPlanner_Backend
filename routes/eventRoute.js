const express = require("express");
const db = require("../data/dbHelper");

const router = express();

router.get("/", (req, res) => {
  db.getEvents()
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
