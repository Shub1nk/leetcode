import { romanToInt } from ".";

describe("romanToInt", () => {
  it("должен преобразовать в число", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
