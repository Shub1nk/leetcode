import { integerToRoman } from ".";

describe("romanToInteger", () => {
  it("должен перевести целое число в римскую запись", () => {
    expect(integerToRoman(3999)).toBe("MMMCMXCIX");
    expect(integerToRoman(3749)).toBe("MMMDCCXLIX");
    expect(integerToRoman(1994)).toBe("MCMXCIV");
    expect(integerToRoman(58)).toBe("LVIII");
  });
});
