import { Deque } from "../../shared/data-structures/deque";

export const slidingWindowMaximum = (nums: number[], k: number): number[] => {
  const result: number[] = [];
  const deque = new Deque<number>();

  for (const [index, value] of nums.entries()) {
    const windowLeftIndex = index - (k - 1);

    // вытесняем из хвоста тех, кто уже никогда не станет максимумом
    while (!deque.isEmpty() && nums[deque.peekBack()!]! <= value) {
      deque.popBack();
    }
    deque.pushBack(index);

    // голова вышла за левую границу окна — она больше не кандидат
    if (deque.peekFront()! < windowLeftIndex) {
      deque.popFront();
    }

    // peek, а не pop: голова может быть максимумом и для следующих окон
    if (windowLeftIndex >= 0) {
      result.push(nums[deque.peekFront()!]!);
    }
  }

  return result;
};
