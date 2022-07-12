import Province from "./province.js";
import { expect } from "chai";

const sampleProvinceData = () => ({
  name: "Asia",
  producers: [
    { name: "Byzzantium", cost: 10, production: 9 },
    { name: "Attalia", cost: 12, production: 10 },
    { name: "Sinope", cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
});

describe("province", () => {
  let asia;

  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).equal(5);
  });

  it("profit", () => {
    expect(asia.profit).equal(230);
  });
});
