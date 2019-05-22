const server = require("../server");
const request = require("supertest");

describe("sever", () => {
  describe("test", () => {
    it("true should be true", () => {
      expect(true).toBe(true);
    });
  });

  //GET GET GET

  describe("get /api/events", () => {
    it("should return a status 200 on success", () => {
      return request(server)
        .get("/api/events")
        .expect(200);
    });
  });

  //POST POST POST

  describe("post /api/events", () => {
    it("should return status 200 on successful post", async () => {
      const event = {
        eventName: "Test Event",
        eventType: "Test Type",
        eventDate: "03/12/2019",
        eventDescription: "Test Description",
        eventBudget: "1001",
        location: "Test Location",
        agenda: "Test Agenda",
        user_id: 1
      };

      const res = await request(server)
        .post("/api/events")
        .send(event);

      expect(res.status).toBe(200);
    });

    it("should return a status 500 on failed post", async () => {
      const event = {
        //no eventName
        eventType: "Test Type",
        eventDate: "03/12/2019",
        eventDescription: "Test Description",
        eventBudget: "1001",
        location: "Test Location",
        agenda: "Test Agenda",
        user_id: 1
      };
      const res = await request(server)
        .post("/api/events")
        .send(event);

      expect(res.status).toBe(500);
    });
  });

  //DELETE DELETE DELETE

  describe("delete /api/events/:id", () => {
    it("should return status 200 on successful delete", () => {
      return request(server)
        .delete("/api/events/21")
        .expect(200);
    });
    it("should return status 404 on events without correct id", () => {
      return request(server)
        .delete("/api/events/15321")
        .expect(404);
    });
  });

  ///UPDATE UPDATE UPDATE
  describe("put /api/events/:id", () => {
    it("should return status 200 on successful put", async () => {
      const event = {
        eventName: "UPDATE Test Event",
        eventType: "UPDATE Test Type",
        eventDate: "UPDATE 03/12/2019",
        eventDescription: "UPDATE Test Description",
        eventBudget: "UPDATE 1001",
        location: "UPDATE Test Location",
        agenda: "UPDATE Test Agenda",
        user_id: 1
      };

      const res = await request(server)
        .put("/api/events/13")
        .send(event);

      expect(res.status).toBe(200);
    });

    it("should return a status 500 on failed put", async () => {
      const event = {
        invalid: "put",
        eventType: "Test Type",
        eventDate: "03/12/2019",
        eventDescription: "Test Description",
        eventBudget: "1001",
        location: "Test Location",
        agenda: "Test Agenda",
        user_id: 1
      };
      const res = await request(server)
        .put("/api/events/17")
        .send(event);

      expect(res.status).toBe(500);
    });
  });
});
