export const houseRobber = (nums: number[]): number => {
  if (nums.length === 1) return nums[0]!;

  const cache: Record<number, number> = { 0: nums[0]!, 1: Math.max(nums[0]!, nums[1]!) };

  const getMaxLootUpTo = (index: number): number => {
    if (index in cache) return cache[index]!;

    cache[index] = Math.max(getMaxLootUpTo(index - 1), nums[index]! + getMaxLootUpTo(index - 2));

    return cache[index];
  };

  return getMaxLootUpTo(nums.length - 1);
};
