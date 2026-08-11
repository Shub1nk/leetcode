import { getMid } from "../../shared";

const canShip = (weights: number[], capacity: number, days: number): boolean => {
  let curDay = 1;
  let loaded = 0;

  for (const packageWeight of weights) {
    const nextLoaded = loaded + packageWeight;

    if (nextLoaded > capacity) {
      curDay += 1;

      if (curDay > days) {
        return false;
      }

      loaded = packageWeight;
    } else {
      loaded = nextLoaded;
    }
  }

  return curDay <= days;
};

export const shipWithinDays = (weights: number[], days: number): number => {
  let sum = 0;
  let maxWeight = 0;

  for (const packageWeight of weights) {
    maxWeight = Math.max(packageWeight, maxWeight);
    sum += packageWeight;
  }

  let left = Math.max(maxWeight, Math.ceil(sum / days));
  let right = sum;

  while (left < right) {
    const capacity = getMid(left, right);

    if (canShip(weights, capacity, days)) {
      right = capacity;
    } else {
      left = capacity + 1;
    }
  }

  return left;
};
