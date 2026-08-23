import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 111,
  slug: "minimum-depth-of-binary-tree",
  title: "Minimum Depth of Binary Tree",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
  status: "solved",
  solvedAt: "2026-08-23",
  topics: ["tree", "depth-first-search", "breadth-first-search", "binary-tree"],
  approaches: [
    {
      name: "bfs",
      file: "bfs.ts",
      techniques: ["bfs"],
      dataStructures: ["tree", "queue"],
      usesShared: ["queue"],
    },
    {
      name: "dfs",
      file: "dfs.ts",
      techniques: ["dfs", "recursion"],
      dataStructures: ["tree"],
      usesShared: [],
    },
  ],
};
