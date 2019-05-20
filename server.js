require("dotenv").config();
const secrets = require("./data/secrets/secrets");
const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("./data/dbHelper");
// const restricted = require("./data/middleware/restricted");
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);
const jwt = require("jsonwebtoken");
const cors = require("cors");
const eventRouter = require("./routes/eventRoute");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/events", eventRouter);

const sessionConfig = {
  name: "cookie",
  secret: "secret",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 1,
    secure: false
  },
  resave: false,
  saveUninitialized: true,
  store: new knexSessionStore({
    knex: require("./data/dbConfig"),
    createTable: true,
    clearInterval: 1000 * 60 * 15
  })
};

server.use(session(sessionConfig));

server.get("/", (req, res) => {
  res.send("server running..");
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(user => {
      res.status(200).json({ user, decodedToken: req.decodedToken });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/api/register", (req, res) => {
  console.log(req.body);
  users = req.body;
  const hash = bcrypt.hashSync(users.password, 10);
  users.password = hash;

  db.add(users)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  db.login({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome User`,
          token
        });
      } else {
        res.status(404).json({ message: "Invalid Login" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error Logging In" });
    });
});

function generateToken(user) {
  console.log(user);
  const payload = {
    subject: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

server.get("/api/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send("error logging out");
      } else {
        res.send("Logged Out");
      }
    });
  } else {
    res.end();
  }
});

module.exports = server;
