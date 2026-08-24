interface ICase {
  name: string;
  data: number[];
  expected: number[];
}

export const cases: ICase[] = [
  {
    name: "Пример 1: LeetCode",
    data: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  { name: "Пример 2: LeetCode", data: [30, 40, 50, 60], expected: [1, 1, 1, 0] },
  { name: "Пример 3: LeetCode", data: [30, 60, 90], expected: [1, 1, 0] },
  { name: "Пример 4: одинаковая температура все дни", data: [30, 30, 30], expected: [0, 0, 0] },
  { name: "Пример 5: строго убывающие", data: [90, 80, 70, 60], expected: [0, 0, 0, 0] },
  { name: "Пример 6: повтор значений в перемешку", data: [30, 40, 30, 40], expected: [1, 0, 1, 0] },
  { name: "Пример 7: один день", data: [50], expected: [0] },
  {
    name: "Пример 8: с повышением через несколько дней",
    data: [70, 71, 70, 72],
    expected: [1, 2, 1, 0],
  },
];
