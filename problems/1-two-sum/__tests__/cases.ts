interface ICase {
  name: string;
  data: { nums: number[]; target: number };
  expected: number[];
}

export const cases: ICase[] = [
  {
    name: "пример 1: [2, 7, 11, 15], target = 9",
    data: { nums: [2, 7, 11, 15], target: 9 },
    expected: [0, 1],
  },
  {
    name: "пример 2: [3, 2, 4], target = 6",
    data: { nums: [3, 2, 4], target: 6 },
    expected: [1, 2],
  },
  { name: "пример 3: [3, 3], target = 6", data: { nums: [3, 3], target: 6 }, expected: [0, 1] },
];
