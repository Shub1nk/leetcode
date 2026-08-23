interface ICase {
  name: string;
  data: Array<number | null>;
  expected: number;
}

export const cases: ICase[] = [
  { name: "Пример 1", data: [3, 9, 20, null, null, 15, 7], expected: 2 },
  { name: "Пример 2", data: [2, null, 3, null, 4, null, 5, null, 6], expected: 5 },
  { name: "Пустое дерево: корня нет", data: [null], expected: 0 },
  { name: "Один корень", data: [1], expected: 1 },
  { name: "Корень и 2 листа", data: [1, 2, 3], expected: 2 },
  {
    name: "Вырожденное влево дерево",
    data: [1, 2, null, 3, null, 4, null, 5],
    expected: 5,
  },
  {
    name: "Только один левый ребенок",
    data: [1, 2],
    expected: 2,
  },
  {
    name: "Только один правый ребенок",
    data: [1, null, 2],
    expected: 2,
  },
  {
    name: "Цепочка через единственных левых детей",
    data: [1, 2, null, 3],
    expected: 3,
  },
  {
    name: "Ранний выход через левый край",
    data: [1, 2, 3, null, null, 4, 5],
    expected: 2,
  },
  {
    name: "Ранний выход через правый край",
    data: [1, 2, 3, 4, 5],
    expected: 2,
  },
  {
    name: "Полное дерево",
    data: [1, 2, 3, 4, 5, 6, 7],
    expected: 3,
  },
  {
    name: "Значения-нули",
    data: [0, 0, null, 0],
    expected: 3,
  },
];
