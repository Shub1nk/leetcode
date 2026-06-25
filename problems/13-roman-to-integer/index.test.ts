import { romanToInt } from ".";

describe("romanToInt", () => {
  it("должен преобразовать в число", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("границы диапазона: I и MMMCMXCIX", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });

  it("вычитающие комбинации", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });
});
