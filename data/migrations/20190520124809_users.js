exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("firstName").notNullable();

    tbl.string("lastName").notNullable();

    tbl
      .string("email")
      .notNullable()
      .unique();
    tbl.string("password").notNullable();
    tbl.string("yearOfBirth");
    tbl.string("jobTitle");
    tbl.string("company");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
