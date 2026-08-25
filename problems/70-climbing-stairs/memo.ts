export const climbingStairs = (stairsCount: number): number => {
  const cache: Record<number, number> = { 0: 0, 1: 1, 2: 2 };

  const countWays = (step: number): number => {
    if (step in cache) return cache[step]!;

    cache[step] = countWays(step - 1) + countWays(step - 2);

    return cache[step];
  };

  return countWays(stairsCount);
};
