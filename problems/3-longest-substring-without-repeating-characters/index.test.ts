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

  it("пустая строка → 0", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("один символ → 1", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  it("без повторов — вся строка", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });

  it("скачок left за первый дубликат: dvdf → 3", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });

  it("left не перепрыгивает слишком далеко: tmmzuxt → 5", () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  });

  it("left не едет назад при повторном откате: abba → 2", () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });

  it("пробел — валидный символ: два пробела → 1", () => {
    expect(lengthOfLongestSubstring("   ")).toBe(1);
  });
});
