export const STACK_ERROR_EMPTY = "Stack is empty";

class StackUnderflowError extends Error {
  constructor() {
    super(STACK_ERROR_EMPTY);
    this.name = "StackUnderflowError";
  }
}

export class Stack<T> {
  private stack: T[] = [];

  private assertNotEmpty() {
    if (this.isEmpty()) {
      throw new StackUnderflowError();
    }
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop() {
    this.assertNotEmpty();
    return this.stack.pop()!;
  }

  peek() {
    this.assertNotEmpty();
    return this.stack[this.size - 1];
  }

  get size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size === 0;
  }
}
