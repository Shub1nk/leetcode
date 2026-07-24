export const countSubarrays = (nums: number[]): number => {
  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === (nums[i - 1]! + nums[i + 1]!) * 2) {
      count += 1;
    }
  }

  return count;
};
