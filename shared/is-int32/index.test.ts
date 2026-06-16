import { isInt32 } from ".";

describe("isInt32", () => {
  it("Ноль является Int32", () => {
    expect(isInt32(0)).toBe(true);
  });

  it("Положительные нормальные значения", () => {
    expect(isInt32(1)).toBe(true);
    expect(isInt32(100)).toBe(true);
    expect(isInt32(2147483647)).toBe(true);
  });

  it("Отрицательные нормальные значения", () => {
    expect(isInt32(-1)).toBe(true);
    expect(isInt32(-100)).toBe(true);
    expect(isInt32(-2147483648)).toBe(true);
  });

  it("За пределами Int32 — положительные", () => {
    expect(isInt32(2147483648)).toBe(false);
    expect(isInt32(2147483649)).toBe(false);
    expect(isInt32(1e10)).toBe(false);
  });

  it("За пределами Int32 — отрицательные", () => {
    expect(isInt32(-2147483649)).toBe(false);
    expect(isInt32(-1e10)).toBe(false);
  });

  it("Граничные значения (boundary)", () => {
    expect(isInt32(2147483647)).toBe(true);
    expect(isInt32(-2147483648)).toBe(true);
    expect(isInt32(2147483648)).toBe(false);
    expect(isInt32(-2147483649)).toBe(false);
  });
});
