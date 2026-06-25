import { integerToRoman } from ".";

describe("integerToRoman", () => {
  it("должен перевести целое число в римскую запись", () => {
    expect(integerToRoman(3749)).toBe("MMMDCCXLIX");
    expect(integerToRoman(1994)).toBe("MCMXCIV");
    expect(integerToRoman(58)).toBe("LVIII");
  });

  it("границы диапазона: 1 и 3999", () => {
    expect(integerToRoman(1)).toBe("I");
    expect(integerToRoman(3999)).toBe("MMMCMXCIX");
  });

  it("вычитающие комбинации", () => {
    expect(integerToRoman(4)).toBe("IV");
    expect(integerToRoman(9)).toBe("IX");
    expect(integerToRoman(40)).toBe("XL");
    expect(integerToRoman(90)).toBe("XC");
    expect(integerToRoman(400)).toBe("CD");
    expect(integerToRoman(900)).toBe("CM");
  });
});
