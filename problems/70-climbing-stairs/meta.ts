import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 70,
  slug: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "easy",
  url: "https://leetcode.com/problems/climbing-stairs/",
  status: "solved",
  solvedAt: "2026-08-25",
  topics: ["math", "dynamic-programming", "memoization"],
  approaches: [
    {
      name: "tabulation",
      file: "tabulation.ts",
      techniques: ["dynamic-programming"],
      dataStructures: [],
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
