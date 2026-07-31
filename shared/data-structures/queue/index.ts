import { Deque } from "../deque";

export const QUEUE_ERROR_EMPTY = "Queue is empty";

class QueueUnderflowError extends Error {
  constructor() {
    super(QUEUE_ERROR_EMPTY);
    this.name = "QueueUnderflowError";
  }
}

/**
 * FIFO-очередь: элементы выходят в порядке добавления.
 *
 * Тонкая обёртка над {@link Deque} — enqueue в хвост, dequeue с головы.
 * В отличие от голого дека, снятие/просмотр на пустой очереди бросают
 * {@link QueueUnderflowError} ({@link QUEUE_ERROR_EMPTY}), а не возвращают
 * `undefined`.
 *
 * @example
 * const q = new Queue<number>();
 * q.enqueue(1);
 * q.enqueue(2);
 * q.dequeue(); // 1
 */
export class Queue<T> {
  private deque = new Deque<T>();

  private assertNotEmpty() {
    if (this.isEmpty()) {
      throw new QueueUnderflowError();
    }
  }

  /** Добавляет элемент в хвост очереди. */
  enqueue(item: T) {
    this.deque.pushBack(item);
  }

  /** Снимает head; бросает исключение, если очередь пуста. */
  dequeue() {
    this.assertNotEmpty();
    return this.deque.popFront()!;
  }

  /** Head без снятия; бросает исключение, если очередь пуста. */
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
