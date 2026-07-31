import { UnionFind } from "../../shared";
import { manhattanDistance, type TTupleCoord } from "./common";

type TEdge = [from: number, to: number, cost: number];

export const minCostToConnectAllPoints = (points: TTupleCoord[]): number => {
  if (points.length <= 1) return 0;

  let total = 0;
  const edges: TEdge[] = [];
  const uf = new UnionFind(points.keys());

  for (let i = 0; i < points.length; i++) {
    const a = points[i]!;
    for (let j = i + 1; j < points.length; j++) {
      const b = points[j]!;
      edges.push([i, j, manhattanDistance(a, b)]);
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  for (const [from, to, cost] of edges) {
    const isMerged = uf.union(from, to);
    if (isMerged) {
      total += cost;
      if (uf.count === 1) break;
    }
  }

  return total;
};
