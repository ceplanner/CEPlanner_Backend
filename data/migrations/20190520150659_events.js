exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", tbl => {
    tbl.increments();
    tbl.string("eventName").notNullable();
    tbl.string("eventType").notNullable();
    tbl.string("eventDate");
    tbl.string("eventDescription");
    tbl.string("eventBudget");
    tbl.string("location");
    tbl.string("agenda");
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
