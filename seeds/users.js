exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "John",
          lastName: "Sparks",
          email: "john.sparks@email.com",
          password: "password",
          yearOfBirth: 1993,
          jobTitle: "HR",
          company: "Apple"
        },
        {
          firstName: "Alex",
          lastName: "Rumney",
          email: "alex.rumney@email.com",
          password: "password",
          yearOfBirth: 1976,
          jobTitle: "CEO",
          company: "Ebay"
        },
        {
          firstName: "Jenifer",
          lastName: "Pruit",
          email: "jenifer.pruit@email.com",
          password: "password",
          yearOfBirth: 1967,
          jobTitle: "VP",
          company: "Facebook"
        }
      ]);
    });
};
