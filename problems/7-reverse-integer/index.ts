import { isInt32 } from "../../shared/is-int32";
import { mathReverseInteger } from "../../shared/math-reverse-integer";

export const reverseInteger = (int: number): number => {
  const reversed = mathReverseInteger(int);
  return isInt32(reversed) ? reversed : 0;
};
