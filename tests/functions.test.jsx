import ShowItems from "../src/ShowItemsShop";
import { beforeAll, describe, expect, it } from "vitest";
import { askApi } from "../src/askApi";
import { render, screen } from "@testing-library/react";
//cant do proper tests, couse of react router :/
let data;
beforeAll(async () => {
  data = await askApi();
});
describe("do things", () => {
  it("should work", () => {
    expect(1).toEqual(1);
  });
});
describe("showing things", () => {
  it("renders items", () => {
    render(<ShowItems _data={data} />);
    expect(screen.getByText("DANVOUY Womens T Shirt Casual Cotton Short"));
  });
  it("renders one item", () => {
    render(<ShowItems _data={data[0]} />);
    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    );
  });
});
