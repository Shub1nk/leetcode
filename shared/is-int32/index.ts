const MAX_INT32 = 2 ** 31 - 1;
const MIN_INT32 = -(2 ** 31);

export const isInt32 = (n: number): boolean =>
  n >= MIN_INT32 && n <= MAX_INT32;
