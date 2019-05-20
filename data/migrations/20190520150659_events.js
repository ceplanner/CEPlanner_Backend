exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", tbl => {
    tbl.increments();
    tbl.string("eventName").notNullable();
    tbl.string("eventType").notNullable();
    tbl.string("description");
    tbl.integer("eventBudget");
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
