import { Deque } from "../deque";

export const STACK_ERROR_EMPTY = "Stack is empty";

class StackUnderflowError extends Error {
  constructor() {
    super(STACK_ERROR_EMPTY);
    this.name = "StackUnderflowError";
  }
}

/**
 * LIFO-стек: последний добавленный элемент выходит первым.
 *
 * Тонкая обёртка над {@link Deque}, работающая только с хвостом. Снятие/просмотр
 * на пустом стеке бросают {@link StackUnderflowError} ({@link STACK_ERROR_EMPTY}).
 *
 * @example
 * const st = new Stack<number>();
 * st.push(1);
 * st.push(2);
 * st.pop(); // 2
 */
export class Stack<T> {
  private deque = new Deque<T>();

  private assertNotEmpty() {
    if (this.isEmpty()) {
      throw new StackUnderflowError();
    }
  }

  /** Кладёт элемент на вершину. */
  push(item: T) {
    this.deque.pushBack(item);
  }

  /** Снимает вершину; бросает исключение, если стек пуст. */
  pop() {
    this.assertNotEmpty();
    return this.deque.popBack()!;
  }

  /** Вершина без снятия; бросает исключение, если стек пуст. */
  peek() {
    this.assertNotEmpty();
    return this.deque.peekBack()!;
  }

  get size() {
    return this.deque.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}
