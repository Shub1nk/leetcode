export const slidingWindowMaximum = (nums: number[], k: number): number[] => {
  const result: number[] = [];
  const lastIndex = nums.length - 1;

  for (let right = k - 1; right <= lastIndex; right++) {
    const left = right - (k - 1);
    let maxInWindow = -Infinity;

    for (let index = left; index <= right; index++) {
      maxInWindow = Math.max(maxInWindow, nums[index]!);
    }

    result.push(maxInWindow);
  }

  return result;
};
