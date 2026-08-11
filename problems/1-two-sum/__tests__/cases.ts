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
  {
    name: "пример 4: отрицательные числа",
    data: { nums: [-3, 4, 3, 90], target: 0 },
    expected: [0, 2],
  },
  {
    name: "пример 5: пары нет → пустой массив",
    data: { nums: [1, 4, 3, 5], target: 10 },
    expected: [],
  },
  {
    name: "пример 6: пара в конце длинного массива",
    data: { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100], target: 110 },
    expected: [10, 11],
  },
];
