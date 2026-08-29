import { UNREACHABLE } from "../common";

interface ICase {
  name: string;
  data: { coins: number[]; amount: number };
  expected: number;
  skipFor?: string[];
}

export const cases: ICase[] = [
  { name: "Пример 1: LeetCode", data: { coins: [1, 2, 5], amount: 11 }, expected: 3 },
  {
    name: "Пример 2: LeetCode",
    data: { coins: [2], amount: 3 },
    expected: UNREACHABLE,
  },
  { name: "Пример 3: LeetCode", data: { coins: [1], amount: 0 }, expected: 0 },
  { name: "Пример 4: жадность не сработает", data: { coins: [1, 3, 4], amount: 6 }, expected: 2 },
  {
    name: "Пример 5: большая глубина для рекурсии",
    data: { coins: [1], amount: 10_000 },
    expected: 10_000,
    skipFor: ["memo"], // рекурсией не решить, так как будет падать из-за количество вызовов в стеке
  },
  {
    name: "Пример 6: 1 монета и нужная сумма",
    data: { coins: [5], amount: 5 },
    expected: 1,
  },
  {
    name: "Пример 7: предел coins.lenght",
    data: { coins: [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], amount: 9864 },
    expected: 24,
  },
  {
    name: "Пример 8: еще один пример с LeetCode",
    data: { coins: [186, 419, 83, 408], amount: 6249 },
    expected: 20,
  },
  {
    name: "Пример 9: нет монет под текущую сумму",
    data: { coins: [500], amount: 100 },
    expected: UNREACHABLE,
  },
  {
    name: "Пример 10: 2 монеты, с меньшим и большим номиналом чем сумма",
    data: { coins: [10, 500], amount: 100 },
    expected: 10,
  },
];
