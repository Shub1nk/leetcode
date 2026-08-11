import type { ProblemMeta } from "../../scripts/meta/types";

export const meta: ProblemMeta = {
  id: 1011,
  slug: "capacity-to-ship-packages-within-d-days",
  title: "Capacity To Ship Packages Within D Days",
  difficulty: "medium",
  url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
  status: "solved",
  solvedAt: "2026-08-11",
  topics: ["array", "binary-search"],
  approaches: [
    {
      name: "binary-search",
      techniques: ["binary-search", "greedy"],
      dataStructures: ["array"],
      usesShared: ["get-mid"],
    },
  ],
};
