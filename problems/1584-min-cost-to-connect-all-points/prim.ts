import { manhattanDistance, type TTupleCoord } from "./common";

export const minCostToConnectAllPoints = (points: TTupleCoord[]): number => {
  if (points.length <= 1) return 0;

  const inTree = new Array<boolean>(points.length).fill(false);
  const minDist = new Array<number>(points.length).fill(Infinity);
  minDist[0] = 0;
  let total = 0;

  for (let i = 0; i < points.length; i++) {
    let u = -1;

    for (let v = 0; v < points.length; v++) {
      if (inTree[v]) continue;
      if (u === -1 || minDist[v]! < minDist[u]!) {
        u = v;
      }
    }
    inTree[u] = true;
    total += minDist[u]!;

    for (let v = 0; v < points.length; v++) {
      if (inTree[v]) continue;
      minDist[v] = Math.min(minDist[v]!, manhattanDistance(points[u]!, points[v]!));
    }
  }

  return total;
};
