import { Stack } from "../../shared";

export const dailyTemperatures = (temperatures: number[]): number[] => {
  const result: number[] = new Array<number>(temperatures.length).fill(0);
  const stack = new Stack<number>();

  for (const [index, temperature] of temperatures.entries()) {
    while (!stack.isEmpty() && temperature > temperatures[stack.peek()]!) {
      const coolerDayIndex = stack.pop();
      result[coolerDayIndex] = index - coolerDayIndex;
    }
    stack.push(index);
  }

  return result;
};
