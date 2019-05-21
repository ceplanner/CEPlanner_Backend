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
          eventDescription: "Celebrating another year of success",
          eventDate: "03/12/2019",
          eventBudget: "1000",
          location: "room 220",
          agenda: "agenda for event",
          user_id: 1
        },
        {
          eventName: "Corporate Welcoming ",
          eventType: "Casual",
          eventDescription: "Casual event to introduce new members",
          eventDate: "07/23/2019",
          eventBudget: "321",
          user_id: 1,
          location: "room 130",
          agenda: "agenda for event"
        },
        {
          eventName: "Bake Sale",
          eventType: "Fundraising",
          eventDate: "01/13/2019",
          eventDescription: "selling baked good for a great cause",
          eventBudget: "543",
          location: "room 130",
          agenda: "agenda for event",
          user_id: 1
        }
      ]);
    });
};
