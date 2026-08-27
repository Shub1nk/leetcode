export const houseRobber = (nums: number[]): number => {
  if (nums.length === 1) return nums[0]!;

  const maxLootUpTo: number[] = new Array(nums.length).fill(0);
  maxLootUpTo[0] = nums[0]!;
  maxLootUpTo[1] = Math.max(nums[0]!, nums[1]!);

  for (let houseIndex = 2; houseIndex < nums.length; houseIndex++) {
    const currentLootValue = nums[houseIndex]!;
    maxLootUpTo[houseIndex] = Math.max(
      maxLootUpTo[houseIndex - 1]!,
      currentLootValue + maxLootUpTo[houseIndex - 2]!,
    );
  }

  return maxLootUpTo[nums.length - 1]!;
};
