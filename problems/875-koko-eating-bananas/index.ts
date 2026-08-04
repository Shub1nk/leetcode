import { getMid } from "../../shared";

export const minEatingSpeed = (piles: number[], h: number): number => {
  const isPilesEqualHours = piles.length === h;

  const maxPile = Math.max(...piles);

  if (isPilesEqualHours) return maxPile;

  let left = 1;
  let right = maxPile;

  while (left < right) {
    const mid = getMid(left, right);
    const hours = piles.reduce((acc, pile) => acc + Math.floor((pile + mid - 1) / mid), 0);

    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
