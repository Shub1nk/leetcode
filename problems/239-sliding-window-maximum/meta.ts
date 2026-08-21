import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 239,
  slug: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  difficulty: "hard",
  url: "https://leetcode.com/problems/sliding-window-maximum/",
  status: "solved",
  solvedAt: "2026-08-21",
  topics: ["array", "queue", "sliding-window", "monotonic-queue", "heap-priority-queue"],
  approaches: [
    {
      name: "brute-force",
      file: "brute-force.ts",
      techniques: ["sliding-window"],
      dataStructures: ["array"],
      usesShared: [],
    },
    {
      name: "monotonic-deque",
      file: "monotonic-deque.ts",
      techniques: ["monotonic-deque", "sliding-window"],
      dataStructures: ["array", "deque"],
      usesShared: ["deque"],
    },
  ],
};
