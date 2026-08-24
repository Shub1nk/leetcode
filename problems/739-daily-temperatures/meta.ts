import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 739,
  slug: "daily-temperatures",
  title: "Daily Temperatures",
  difficulty: "medium",
  url: "https://leetcode.com/problems/daily-temperatures/",
  status: "solved",
  solvedAt: "2026-08-24",
  topics: ["array", "stack", "monotonic-stack"],
  approaches: [
    {
      name: "monotonic-stack",
      file: "monotonic-stack.ts",
      techniques: ["monotonic-stack"],
      dataStructures: ["array", "stack"],
      usesShared: ["stack"],
    },
  ],
};
