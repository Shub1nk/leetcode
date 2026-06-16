import { mathReverseInteger } from "../../shared";

export const isPalindrome = (num: number): boolean => {
  if (num < 0) return false;
  if (num < 10) return true;
  if (num % 10 === 0) return false;

  const reversed = mathReverseInteger(num);

  return reversed === num;
};
