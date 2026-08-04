import { getMid } from "../../shared";

const getSumTrips = (trips: number[]) => trips.reduce((a, b) => a + b, 0);

export const minimumTimeToCompleteTrips = (time: number[], totalTrips: number): number => {
  let left = Math.min(...time);
  let right = left * totalTrips;

  while (left < right) {
    const mid = getMid(left, right);

    const trips = time.map((t) => Math.floor(mid / t));
    const sumTrip = getSumTrips(trips);

    if (sumTrip >= totalTrips) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
