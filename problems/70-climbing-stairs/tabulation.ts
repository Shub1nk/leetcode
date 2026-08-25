export const climbingStairs = (stairsCount: number): number => {
  if (stairsCount === 0) return 0;
  if (stairsCount === 1) return 1;
  if (stairsCount === 2) return 2;

  let previousWays = 1;
  let currentWays = 2;

  for (let i = 3; i <= stairsCount; i++) {
    [previousWays, currentWays] = [currentWays, previousWays + currentWays];
  }

  return currentWays;
};
