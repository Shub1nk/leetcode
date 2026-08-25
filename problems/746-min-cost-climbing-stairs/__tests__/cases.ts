interface ICase {
  name: string;
  data: number[];
  expected: number;
}

export const cases: ICase[] = [
  { name: "Пример 1: LeetCode", data: [10, 15, 20], expected: 15 },
  { name: "Пример 2: LeetCode", data: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], expected: 6 },
  { name: "Пример 3: нулевая цена", data: [0, 0, 1], expected: 0 },
  { name: "Пример 4: минимальная длина", data: [1, 100], expected: 1 },
];
