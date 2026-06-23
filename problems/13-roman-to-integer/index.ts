const romanToIntegerMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
} as const;

type TRomanSymbol = keyof typeof romanToIntegerMap;

export const romanToInt = (romanNum: string): number => {
  const arr = romanNum.split("");

  let index = arr.length - 1;
  let acc = 0;

  while (index >= 0) {
    const currentSymbol = arr[index] as TRomanSymbol;
    const prevSymbol = arr[index + 1] as TRomanSymbol;

    const currentValue = romanToIntegerMap[currentSymbol];
    const prevValue = prevSymbol && romanToIntegerMap[prevSymbol];

    if (prevValue && currentValue < prevValue) {
      acc -= currentValue;
    } else {
      acc += currentValue;
    }

    --index;
  }

  return acc;
};
