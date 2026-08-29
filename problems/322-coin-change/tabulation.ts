import { UNREACHABLE } from "./common";

export const coinChange = (coins: number[], amount: number): number => {
  const minCoinCountsByAmount: number[] = new Array(amount + 1).fill(Infinity);
  minCoinCountsByAmount[0] = 0;

  for (let currentSum = 1; currentSum <= amount; currentSum++) {
    let minCoins = Infinity;
    for (const coin of coins) {
      if (coin <= currentSum) {
        minCoins = Math.min(minCoins, minCoinCountsByAmount[currentSum - coin]!);
      }
    }
    minCoinCountsByAmount[currentSum] = minCoins + 1;
  }

  const result = minCoinCountsByAmount[amount];

  if (result === Infinity) {
    return UNREACHABLE;
  }

  return result!;
};
