import { Deque } from "../deque";

export const QUEUE_ERROR_EMPTY = "Queue is empty";

class QueueUnderflowError extends Error {
  constructor() {
    super(QUEUE_ERROR_EMPTY);
    this.name = "QueueUnderflowError";
  }
}

export class Queue<T> {
  private deque = new Deque<T>();

  private assertNotEmpty() {
    if (this.isEmpty()) {
      throw new QueueUnderflowError();
    }
  }

  enqueue(item: T) {
    this.deque.pushBack(item);
  }

  dequeue() {
    this.assertNotEmpty();
    return this.deque.popFront()!;
  }

  peek() {
    this.assertNotEmpty();
    return this.deque.peekFront()!;
  }

  get size() {
    return this.deque.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}
