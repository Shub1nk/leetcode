import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 1584,
  slug: "min-cost-to-connect-all-points",
  title: "Min Cost to Connect All Points",
  difficulty: "medium",
  url: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
  status: "solved",
  solvedAt: "2026-07-31",
  topics: ["array", "union-find", "graph", "minimum-spanning-tree"],
  approaches: [
    {
      name: "kruskal",
      techniques: ["kruskal", "minimum-spanning-tree"],
      dataStructures: ["array", "graph", "union-find"],
      usesShared: ["union-find"],
    },
  ],
};
