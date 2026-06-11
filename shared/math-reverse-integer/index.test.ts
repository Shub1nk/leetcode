import { mathReverseInteger } from "./index";

describe("mathReverseInteger", () => {
  it("Разворот положительного числа: 123", () => {
    expect(mathReverseInteger(123)).toBe(321);
  });

  it("Разворот числа с нулями в конце: 1200", () => {
    expect(mathReverseInteger(1200)).toBe(21);
  });

  it("Разворот однозначного числа: 5", () => {
    expect(mathReverseInteger(5)).toBe(5);
  });

  it("Разворот нуля", () => {
    expect(mathReverseInteger(0)).toBe(0);
  });

  it("Разворот отрицательного числа: -123", () => {
    expect(mathReverseInteger(-123)).toBe(-321);
  });

  it("Разворот большого числа: 1234321", () => {
    expect(mathReverseInteger(1234321)).toBe(1234321);
  });
});
