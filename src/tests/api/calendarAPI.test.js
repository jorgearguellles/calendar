import { describe, expect, test } from "vitest";
import calendarAPI from "../../api/calendarAPI";

describe("calendarAPI", () => {
  test("Should have default config", () => {
    expect(calendarAPI.defaults.baseURL).toBe(import.meta.env.VITE_API_URL);
  });

  // test("Should have x-token header to all requests", async () => {
  //   const token = "test-token";
  //   localStorage.setItem("token", token);
  //   const response = await calendarAPI.get("/auth");
  //   expect(response.config.headers["x-token"]).toBe(token);
  // });
});
