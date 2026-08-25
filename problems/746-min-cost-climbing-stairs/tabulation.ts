export const minCostClimbingStairs = (costs: number[]): number => {
  const costToReach: number[] = new Array(costs.length + 1).fill(0);

  // мы можем встать на эти ступеньки сразу и ничего еще не платим
  costToReach[0] = 0;
  costToReach[1] = 0;

  for (let i = 2; i < costToReach.length; i++) {
    // приходим из i-1 или i-2, платим за ступеньку, с которой оттолкнулись
    costToReach[i] = Math.min(
      costToReach[i - 1]! + costs[i - 1]!,
      costToReach[i - 2]! + costs[i - 2]!,
    );
  }

  return costToReach[costToReach.length - 1]!;
};
