export const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const dfs = (i: number, path: number[]) => {
    if (i === nums.length) {
      result.push([...path]);

      return;
    }

    path.push(nums[i]!);
    dfs(i + 1, path);

    path.pop();
    dfs(i + 1, path);
  };

  dfs(0, []);

  return result;
};
