import { isPalindrome } from "./index";

describe("9. Число-палиндром", () => {
  it("положительный палиндром: 121", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("отрицательное число: -121", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("разные цифры: 10", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  it("однозначное число: 5", () => {
    expect(isPalindrome(5)).toBe(true);
  });

  it("ноль является палиндромом", () => {
    expect(isPalindrome(0)).toBe(true);
  });

  it("большой палиндром: 12321", () => {
    expect(isPalindrome(12321)).toBe(true);
  });

  it("не палиндром: 12345", () => {
    expect(isPalindrome(12345)).toBe(false);
  });
});
