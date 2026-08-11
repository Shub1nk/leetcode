interface ICase {
  name: string;
  data: { weights: number[]; days: number };
  expected: number;
}

export const cases: ICase[] = [
  { name: "Пример 1", data: { weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days: 5 }, expected: 15 },
  { name: "Пример 2", data: { weights: [3, 2, 2, 4, 1, 4], days: 3 }, expected: 6 },
  { name: "Пример 3", data: { weights: [1, 2, 3, 1, 1], days: 4 }, expected: 3 },
  { name: "один день на всё", data: { weights: [1, 2, 3, 4, 5], days: 1 }, expected: 15 },
  {
    name: "дней столько же, сколько посылок",
    data: { weights: [3, 2, 2, 4, 1, 4], days: 6 },
    expected: 4,
  },
  { name: "одна посылка", data: { weights: [10], days: 1 }, expected: 10 },
  {
    name: "одна большая посылка и несколько маленьких",
    data: { weights: [1, 1, 1, 100], days: 2 },
    expected: 100,
  },
  { name: "ровное заполнение", data: { weights: [2, 3, 5, 1, 4], days: 3 }, expected: 5 },
  { name: "равные веса", data: { weights: [5, 5, 5, 5], days: 2 }, expected: 10 },
  { name: "пополам", data: { weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days: 2 }, expected: 28 },
  {
    name: "убывающие веса",
    data: { weights: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], days: 5 },
    expected: 15,
  },
];
