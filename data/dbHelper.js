const db = require("./dbConfig");

module.exports = {
  find,
  add,
  login,
  addEvent,
  getEvents,
  removeEvent,
  updateEvent,
  user,
  events
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
  return db("events").insert(event);
}

function updateEvent(id, event) {
  return db("events")
    .where("id", Number(id))
    .update(event);
}

function removeEvent(id) {
  return db("events")
    .where("id", Number(id))
    .del();
}

function user(id) {
  return db("users").where({ id });
}

function events(id) {
  return db("events").where("user_id", id);
}
