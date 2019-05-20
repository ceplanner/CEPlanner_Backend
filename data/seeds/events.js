exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          eventName: "End Of Year Party",
          eventType: "Celebration",
          description: "Celebrating another year of success",
          eventBudget: 1000,
          user_id: 1
        },
        {
          eventName: "Corporate Welcoming ",
          eventType: "Casual",
          description: "Casual event to introduce new members",
          eventBudget: 321,
          user_id: 1
        },
        {
          eventName: "Bake Sale",
          eventType: "Fundraising",
          description: "selling baked good for a great cause",
          eventBudget: 543,
          user_id: 1
        }
      ]);
    });
};
