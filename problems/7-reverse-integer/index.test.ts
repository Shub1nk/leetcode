import { reverseInteger } from ".";

describe("reverseInteger", () => {
  it("Разворот положительного числа: 123", () => {
    expect(reverseInteger(123)).toBe(321);
  });

  it("Разворот числа с нулями в конце: 1200", () => {
    expect(reverseInteger(1200)).toBe(21);
  });

  it("Разворот однозначного числа: 5", () => {
    expect(reverseInteger(5)).toBe(5);
  });

  it("Разворот нуля", () => {
    expect(reverseInteger(0)).toBe(0);
  });

  it("Разворот отрицательного числа: -123", () => {
    expect(reverseInteger(-123)).toBe(-321);
  });

  it("Разворот большого числа: 1234321", () => {
    expect(reverseInteger(1234321)).toBe(1234321);
  });

  it("Переполнение Int32: 1534236469", () => {
    expect(reverseInteger(1534236469)).toBe(0);
  });

  it("Переполнение Int32 (отрицательное): -2147483648", () => {
    expect(reverseInteger(-2147483648)).toBe(0);
  });
});
