import { STACK_ERROR_EMPTY, Stack } from ".";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("должен вернуть true, если стек пустой", () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("должен вернуть размер стека 0", () => {
    expect(stack.size).toEqual(0);
  });

  it("должен добавить элемент в стек", () => {
    stack.push(1);
    expect(stack.size).toEqual(1);
  });

  it("должен вернуть элемент из стека и удалить его", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size).toEqual(2);

    const stackElement = stack.pop();
    expect(stackElement).toEqual(2);

    expect(stack.size).toEqual(1);
  });

  it("должен вернуть элемент, что на данный момент находится на вершине стека", () => {
    stack.push(1);
    expect(stack.size).toEqual(1);

    stack.push(3);
    expect(stack.size).toEqual(2);
    expect(stack.peek()).toEqual(3);
    expect(stack.size).toEqual(2);
  });

  it("должен кидать ошибку, если пытаются запросить из пустого стека последний элемент", () => {
    expect(stack.size).toEqual(0);
    expect(stack.isEmpty()).toBeTruthy();
    expect(() => stack.pop()).toThrow(STACK_ERROR_EMPTY);
    expect(() => stack.peek()).toThrow(STACK_ERROR_EMPTY);
  });

  it("должен вернуть элементы стека согласно LIFO", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });
});
