export const mathReverseInteger = (x: number): number => {
  let reversed = 0;
  let original = Math.abs(x);
  const isNegative = x < 0;

  while (original > 0) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }

  return isNegative ? -reversed : reversed;
};
