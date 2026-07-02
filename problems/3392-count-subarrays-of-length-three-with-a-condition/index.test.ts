import { countSubarrays } from ".";

describe("countSubarrays", () => {
  it("пример 1: одно совпадение в середине", () => {
    expect(countSubarrays([1, 2, 1, 4, 1])).toEqual(1);
  });

  it("пример 2: совпадений нет", () => {
    expect(countSubarrays([1, 1, 1])).toEqual(0);
  });

  it("минимальная длина 3, ровно одно совпадение", () => {
    // 2 + 2 == 8 / 2  →  8 === (2 + 2) * 2
    expect(countSubarrays([2, 8, 2])).toEqual(1);
  });

  it("несколько перекрывающихся совпадений", () => {
    // центры на индексах 1 и 2: 0 === (0 + 0) * 2 оба раза
    expect(countSubarrays([0, 0, 0, 0])).toEqual(2);
  });

  it("отрицательные значения тоже считаются", () => {
    // -4 === (-1 + -1) * 2
    expect(countSubarrays([-1, -4, -1])).toEqual(1);
  });

  it("ноль в середине при симметричных краях", () => {
    // 0 === (-3 + 3) * 2
    expect(countSubarrays([-3, 0, 3])).toEqual(1);
  });

  it("совпадений нет при возрастающем массиве", () => {
    expect(countSubarrays([1, 2, 3])).toEqual(0);
  });
});
