import { twoSum } from ".";

describe("twoSum", () => {
  it("пример 1: [2, 7, 11, 15], target = 9", () => {
    const expected = [0, 1];
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expected);
  });

  it("пример 2: [3, 2, 4], target = 6", () => {
    const expected = [1, 2];
    expect(twoSum([3, 2, 4], 6)).toEqual(expected);
  });

  it("пример 3: [3, 3], target = 6", () => {
    const expected = [0, 1];
    expect(twoSum([3, 3], 6)).toEqual(expected);
  });
});
