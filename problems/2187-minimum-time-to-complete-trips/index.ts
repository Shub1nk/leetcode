const getSumTrips = (trips: number[]) => trips.reduce((a, b) => a + b);

const getMid = (left: number, right: number) => left + Math.floor((right - left) / 2);

export const minimumTimeToCompleteTrips = (time: number[], totalTrips: number): number => {
  let left = Math.min(...time);
  let right = left * totalTrips;

  while (left < right) {
    let mid = getMid(left, right);

    const trips = time.map((t) => Math.floor(mid / t));
    const sumTrip = getSumTrips(trips);

    if (sumTrip >= totalTrips) {
      right = mid;
      mid = getMid(left, right);
    }

    if (sumTrip < totalTrips) {
      left = mid + 1;
      mid = getMid(left, right);
    }
  }

  return left;
};
