import type { TTupleCoord } from "../common";

export interface ICase {
  name: string;
  data: TTupleCoord[];
  expected: number;
}

// Единый источник правды для кейсов — гоняется на всех подходах.
// biome-ignore format: так более компактно смотрится
export const cases: ICase[] = [
  { name: "пример 1 (LeetCode)", data: [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]], expected: 20 },
  { name: "пример 2 (LeetCode)", data: [[3, 12], [-2, 5], [-4, 1]], expected: 18 },
  { name: "одна точка", data: [[0, 0]], expected: 0 },
  { name: "пустой массив", data: [], expected: 0 },
  { name: "две точки", data: [[0, 0], [1, 1]], expected: 2 },
  { name: "дубликаты", data: [[0, 0], [0, 0]], expected: 0 },
  { name: "отрицательные", data: [[-1, -1], [1, 1]], expected: 4 },
  { name: "точки на одной линии", data: [[0, 0], [0, 1], [0, 2]], expected: 2 },
  { name: "квадрат (цикл)", data: [[0, 0], [0, 1], [1, 0], [1, 1]], expected: 3 },
];
