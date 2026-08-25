export const minCostClimbingStairs = (costs: number[]): number => {
  // ограничение задачи гарантирует, что 2 ступеньки точно есть
  const cache: Record<number, number> = { 0: costs[0]!, 1: costs[1]! };

  const getCostEndingAtStair = (stairIndex: number): number => {
    if (stairIndex in cache) return cache[stairIndex]!;

    cache[stairIndex] =
      costs[stairIndex]! +
      Math.min(getCostEndingAtStair(stairIndex - 1), getCostEndingAtStair(stairIndex - 2));

    return cache[stairIndex];
  };

  return Math.min(getCostEndingAtStair(costs.length - 1), getCostEndingAtStair(costs.length - 2));
};
