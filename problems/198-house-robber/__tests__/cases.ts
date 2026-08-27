interface ICase {
  name: string;
  data: number[];
  expected: number;
}

export const cases: ICase[] = [
  { name: "Пример 1: Leetcode", data: [1, 2, 3, 1], expected: 4 },
  { name: "Пример 2: Leetcode", data: [2, 7, 9, 3, 1], expected: 12 },
  { name: "Пример 3: один дом", data: [2], expected: 2 },
  { name: "Пример 4: богатые дома по краям", data: [2, 1, 1, 2], expected: 4 },
  { name: "Пример 5: только два дома", data: [5, 1], expected: 5 },
  { name: "Пример 6: только два дома и они равноценны", data: [5, 5], expected: 5 },
  { name: "Пример 7: только два дома и грабить нечего", data: [0, 0], expected: 0 },
  { name: "Пример 8: средний дом выгоднее других", data: [1, 10, 1], expected: 10 },
  { name: "Пример 9: выгодные дома по краям из 3-х", data: [5, 1, 5], expected: 10 },
  {
    name: "Пример 10: только пару зажиточных домов на улице",
    data: [1, 20, 1, 1, 20, 1],
    expected: 40,
  },
  { name: "Пример 11: рай для ворюг", data: new Array(100).fill(400), expected: 20_000 },
];
