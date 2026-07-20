import { subsets } from ".";

const normalize = (list: number[][]) =>
  list
    .map((s) => s.slice().sort((a, b) => a - b))
    .map((item) => JSON.stringify(item))
    .sort();

describe("subsets", () => {
  it("должен возвращать комбинацию из одного пустого массива, если не передали данных", () => {
    expect(subsets([])).toEqual([[]]);
  });

  it("должен возвращать 2 комбинации", () => {
    const result = normalize(subsets([1]));
    const expected = normalize([[], [1]]);

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  it("должен возвращать идентичные 8 комбинаций для двух массивов из 3-х элементов", () => {
    const result1 = normalize(subsets([1, 2, 3]));
    expect(result1).toHaveLength(8);

    const result2 = normalize(subsets([1, 3, 2]));
    expect(result2).toHaveLength(8);

    expect(result1).toEqual(result2);
  });

  it("должен возвращать известные 8 подмножеств", () => {
    const result = normalize(subsets([1, 2, 3]));
    const expected = normalize([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);

    expect(result).toEqual(expected);
  });
});
