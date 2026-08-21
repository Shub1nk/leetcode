import { bigCase1, bigCase1Expected } from "./big-case-1";

interface ICase {
  name: string;
  data: { nums: number[]; k: number };
  expected: number[];
}

export const cases: ICase[] = [
  {
    name: "Пример 1 (LeetCode)",
    data: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
    expected: [3, 3, 5, 5, 6, 7],
  },
  {
    name: "Пример 2 (LeetCode)",
    data: { nums: [1], k: 1 },
    expected: [1],
  },
  {
    name: "Пример 3 (LeetCode)",
    data: { nums: bigCase1, k: 6 },
    expected: bigCase1Expected,
  },
  {
    name: "убывающий",
    data: { nums: [5, 4, 3, 2, 1], k: 3 },
    expected: [5, 4, 3],
  },
  {
    name: "возрастающий",
    data: { nums: [1, 2, 3, 4, 5], k: 3 },
    expected: [3, 4, 5],
  },
  {
    name: "дубликаты",
    data: { nums: [7, 7, 7, 7], k: 2 },
    expected: [7, 7, 7],
  },
  {
    name: "окно равно длине массива",
    data: { nums: [1, 3, 2], k: 3 },
    expected: [3],
  },
  {
    name: "окно в 1 элемент",
    data: { nums: [1, -1, 5], k: 1 },
    expected: [1, -1, 5],
  },
  {
    name: "только отрицательные значения",
    data: { nums: [-3, -1, -5], k: 2 },
    expected: [-1, -1],
  },
];
