import { mathReverseInteger } from "../../shared/math-reverse-integer";
import { isInt32 } from "../../shared/is-int32";

export const reverseInteger = (int: number): number => {
  const reversed = mathReverseInteger(int);
  return isInt32(reversed) ? reversed : 0;
};
