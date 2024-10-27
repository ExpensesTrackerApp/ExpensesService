import request from "supertest";
import expect from "chai";
import app from "../../app";

describe("POST /api/users", () => {
  it("should create a new expense", () => {
    request(app).get("/api/v1/expenses");
  });
});
