import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 994,
  slug: "rotting-oranges",
  title: "Rotting Oranges",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rotting-oranges/",
  status: "solved",
  solvedAt: "2026-07-23",
  topics: ["array", "breadth-first-search", "matrix"],
  approaches: [
    {
      name: "bfs",
      techniques: ["bfs"],
      dataStructures: ["array", "queue"],
      usesShared: ["queue"],
    },
  ],
};
