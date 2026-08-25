interface ICase {
  name: string;
  data: number;
  expected: number;
}

export const cases: ICase[] = [
  { name: "Пример 1: LeetCode", data: 2, expected: 2 },
  { name: "Пример 2: LeetCode", data: 3, expected: 3 },
  { name: "Пример 3: нет ступенек", data: 0, expected: 0 },
  { name: "Пример 4: 1 ступенька", data: 1, expected: 1 },
  { name: "Пример 5: 5 ступенек", data: 5, expected: 8 },
  { name: "Пример 6: 10 ступенек", data: 10, expected: 89 },
  { name: "Пример 7: 15 ступенек", data: 15, expected: 987 },
  { name: "Пример 8: 20 ступенек", data: 20, expected: 10946 },
  { name: "Пример 9: 30 ступенек", data: 30, expected: 1346269 },
  { name: "Пример 10: 40 ступенек", data: 40, expected: 165580141 },
  { name: "Пример 11: 45 ступенек", data: 45, expected: 1836311903 },
];
