export const lengthOfLongestSubstring = (str: string): number => {
  const set = new Set<string>();
  let left = 0;
  let result = 0;

  for (let right = 0; right < str.length; right++) {
    const current = str[right]!;

    while (set.has(current)) {
      set.delete(str[left]!);
      left += 1;
    }

    set.add(current);
    result = Math.max(result, right - left + 1);
  }

  return result;
};
