import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 322,
  slug: "coin-change",
  title: "Coin Change",
  difficulty: "medium",
  url: "https://leetcode.com/problems/coin-change/",
  status: "solved",
  solvedAt: "2026-08-29",
  topics: ["array", "dynamic-programming", "breadth-first-search"],
  approaches: [
    {
      name: "tabulation",
      file: "tabulation.ts",
      techniques: ["dynamic-programming"],
      dataStructures: ["array"],
      usesShared: [],
    },
    {
      name: "memo",
      file: "memo.ts",
      techniques: ["dynamic-programming", "memoization", "recursion"],
      dataStructures: ["map"],
      usesShared: [],
    },
  ],
};
