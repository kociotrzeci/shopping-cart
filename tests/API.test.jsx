import { askApi } from "../src/askApi";
import { describe, it, expect } from "vitest";
describe("Ask api for data", () => {
  it("should get response from API", async () => {
    const data = await askApi();
    expect(Array.isArray(data)).toBe(true);
  });
  it("should get response from API", async () => {
    const data = await askApi(2);
    expect(data.image).toEqual(
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    );
  });
});
