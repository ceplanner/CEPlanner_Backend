const server = require("./server");
const request = require("supertest");

describe("auth", () => {
  describe("test", () => {
    it("true should be true", () => {
      expect(true).toBe(true);
    });
  });

  //LOGIN LOGIN LOGIN
  describe("post /api/login", () => {
    it("should return status 200 on successful login", async () => {
      const user = {
        email: "test@email.com",
        password: "password"
      };

      res = await request(server)
        .post("/api/login")
        .send(user);

      expect(res.status).toBe(200);
    });
    it("should return status 404 on invalid login", async () => {
      const user = {
        email: "invalid@email.com",
        password: "password"
      };

      res = await request(server)
        .post("/api/login")
        .send(user);

      expect(res.status).toBe(404);
    });
    it("should return status 500 on failed login", async () => {
      const user = {};

      res = await request(server)
        .post("/api/login")
        .send(user);

      expect(res.status).toBe(500);
    });
  });

  ///REGISTER REGISTER REGISTER

  describe("register /api/register", () => {
    it("should return status 200 on successful register", async () => {
      const user = {
        firstName: "testR2",
        lastName: "testR2",
        email: "testR@test.com",
        password: "password",
        yearOfBirth: 1993,
        jobTitle: "HR",
        company: "Apple"
      };

      res = await request(server)
        .post("/api/register")
        .send(user);

      expect(res.status).toBe(200);
    });
    it("should return status 500 on failed register", async () => {
      const user = {
        invalid: "testR",
        lastName: "testR",
        email: "test@test.com",
        password: "password",
        yearOfBirth: 1993,
        jobTitle: "HR",
        company: "Apple"
      };

      res = await request(server)
        .post("/api/register")
        .send(user);

      expect(res.status).toBe(500);
    });
  });
});

describe("users", () => {
  describe("get /api/user", () => {
    it("should return status 200 on successful get users", () => {
      return request(server)
        .get("/api/users")
        .expect(200);
    });
  });
  describe("get /api/users/:id/events", () => {
    it("should return status 200 getting user events", () => {
      return request(server)
        .get("/api/users/1/events")
        .expect(200);
    });
  });
});
