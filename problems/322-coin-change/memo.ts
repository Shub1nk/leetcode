import { UNREACHABLE } from "./common";

export const coinChange = (coins: number[], amount: number): number => {
  const cache: Record<number, number> = { 0: 0 };

  const getMinCoinsToReachAmount = (currentSum: number): number => {
    if (currentSum in cache) return cache[currentSum]!;

    let minCoins = Infinity;
    for (const coin of coins) {
      if (coin <= currentSum) {
        minCoins = Math.min(minCoins, getMinCoinsToReachAmount(currentSum - coin));
      }
    }
    cache[currentSum] = minCoins + 1;

    return cache[currentSum];
  };

  const result = getMinCoinsToReachAmount(amount);

  if (result === Infinity) {
    return UNREACHABLE;
  }

  return result;
};
