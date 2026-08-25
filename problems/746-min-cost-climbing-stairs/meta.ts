import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 746,
  slug: "min-cost-climbing-stairs",
  title: "Min Cost Climbing Stairs",
  difficulty: "easy",
  url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
  status: "solved",
  solvedAt: "2026-08-25",
  topics: ["array", "dynamic-programming"],
  approaches: [
    {
      name: "memo",
      file: "memo.ts",
      techniques: ["dynamic-programming", "memoization", "recursion"],
      dataStructures: ["map"],
      usesShared: [],
    },
    {
      name: "tabulation",
      file: "tabulation.ts",
      techniques: ["dynamic-programming"],
      dataStructures: ["array"],
      usesShared: [],
    },
  ],
};
