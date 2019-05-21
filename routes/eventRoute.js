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

router.post("/", (req, res) => {
  const event = req.body;
  if (!event) {
    res.json({ message: "please provide required fields" });
  } else {
    db.addEvent(req.body)
      .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(500).json({ error: "Error Posting Event" });
      });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  updateEvent = req.body;
  if (!updateEvent) {
    res.status(404).json({ message: "please provided updated information" });
  } else {
    db.updateEvent(id, updateEvent)
      .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "The event information could not be modified." });
      });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.removeEvent(id)
    .then(event => {
      if (!event) {
        res
          .status(404)
          .json({ message: "The event with the specified ID does not exist." });
      } else {
        res.status(200).end();
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The event could not be removed" });
    });
});

module.exports = router;
