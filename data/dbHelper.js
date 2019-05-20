const db = require("./dbConfig");

module.exports = {
  find,
  add,
  login,
  addEvent,
  getEvents
};

function find() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}

function login(user) {
  return db("users").where(user);
}

function getEvents() {
  return db("events");
}

function addEvent(event) {
  return db("event").insert(event);
}
