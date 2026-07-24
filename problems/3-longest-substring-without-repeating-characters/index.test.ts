import { lengthOfLongestSubstring } from ".";

describe("lengthOfLongestSubstring", () => {
  it("пример 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("пример 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("пример 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("пример 4", () => {
    expect(lengthOfLongestSubstring("abccdbadfadfa")).toBe(4);
  });
});
