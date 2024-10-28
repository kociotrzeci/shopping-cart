import ShowItems from "../src/showItems";
import { getItems, askApi } from "../src/getItems";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { json } from "react-router-dom";
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
