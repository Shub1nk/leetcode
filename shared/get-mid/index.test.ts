import { getMid } from ".";

describe("getMid", () => {
  it("Должен вернуть середину диапазона", () => {
    expect(getMid(1, 10)).toBe(5);
    expect(getMid(1, 2)).toBe(1);
    expect(getMid(5, 5)).toBe(5);
    expect(getMid(2, 1_000_000_000)).toBe(500_000_001);
  });
});
