import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 198,
  slug: "house-robber",
  title: "House Robber",
  difficulty: "medium",
  url: "https://leetcode.com/problems/house-robber/",
  status: "solved",
  solvedAt: "2026-08-27",
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
