const integerToRomanMap = [
  { key: "M", value: 1000 },
  { key: "CM", value: 900 },
  { key: "D", value: 500 },
  { key: "CD", value: 400 },
  { key: "C", value: 100 },
  { key: "XC", value: 90 },
  { key: "L", value: 50 },
  { key: "XL", value: 40 },
  { key: "X", value: 10 },
  { key: "IX", value: 9 },
  { key: "V", value: 5 },
  { key: "IV", value: 4 },
  { key: "I", value: 1 },
];

export const integerToRoman = (int: number): string => {
  let roman = "";
  let number = int;

  for (const romanItem of integerToRomanMap) {
    const { key, value } = romanItem;

    const quotient = Math.floor(number / value);
    const remainder = number % value;

    if (quotient > 0) {
      roman += key.repeat(quotient);
    }

    number = remainder;
  }

  return roman;
};
