import { UnionFind } from "../../shared";

export type TTupleCoord = [x: number, y: number];
type TEdge = [from: number, to: number, cost: number];

const manhattanDistance = (point1: TTupleCoord, point2: TTupleCoord) =>
  Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);

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
