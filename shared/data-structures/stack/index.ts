import { Deque } from "../deque";

export const STACK_ERROR_EMPTY = "Stack is empty";

class StackUnderflowError extends Error {
  constructor() {
    super(STACK_ERROR_EMPTY);
    this.name = "StackUnderflowError";
  }
}

export class Stack<T> {
  private deque = new Deque<T>();

  private assertNotEmpty() {
    if (this.isEmpty()) {
      throw new StackUnderflowError();
    }
  }

  push(item: T) {
    this.deque.pushBack(item);
  }

  pop() {
    this.assertNotEmpty();
    return this.deque.popBack()!;
  }

  peek() {
    this.assertNotEmpty();
    return this.deque.peekBack();
  }

  get size() {
    return this.deque.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}
