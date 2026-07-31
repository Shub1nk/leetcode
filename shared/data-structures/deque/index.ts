/**
 * Двусторонняя очередь (deque) на кольцевом буфере ({@link Array}).
 *
 * Все четыре операции с концами — `pushFront`/`pushBack`/`popFront`/`popBack` — амортизированно O(1)
 * Голова и хвост двигаются по модулю ёмкости, без сдвига элементов.
 * При заполнении буфер растёт вдвое ({@link resize}), поэтому push никогда не падает по переполнению.
 *
 * Пустые извлечения безопасны: `pop*`/`peek*` на пустой очереди возвращают `undefined`, а не бросают исключения.
 * Обёртки Queue/Stack уже добавляют строгую проверку пустоты поверх этого.
 *
 * @example
 * const dq = new Deque<number>();
 * dq.pushBack(1);
 * dq.pushFront(0);
 * dq.popFront(); // 0
 * dq.popBack();  // 1
 */
export class Deque<T> {
  private buffer: Array<T | undefined>;
  private head: number = 0;
  private _size: number = 0;

  /**
   * @param capacity Стартовая ёмкость буфера. Растёт автоматически при
   * заполнении, так что влияет лишь на число ранних `resize`, не на лимит.
   */
  constructor(private capacity = 8) {
    this.buffer = new Array(capacity);
  }

  /** Кладёт элемент в голову */
  pushFront(el: T) {
    if (this.isFull()) {
      this.resize();
    }
    this.head = (this.head - 1 + this.capacity) % this.capacity;
    this.buffer[this.head] = el;
    this._size += 1;
  }

  /** Кладёт элемент в хвост */
  pushBack(el: T) {
    if (this.isFull()) {
      this.resize();
    }
    const index = (this.head + this._size) % this.capacity;
    this.buffer[index] = el;
    this._size += 1;
  }

  /** Снимает и возвращает элемент с головы */
  popFront(): T | undefined {
    if (this.isEmpty()) return undefined;
    const el = this.buffer[this.head];
    this.buffer[this.head] = undefined;

    this.head = (this.head + 1) % this.capacity;
    this._size -= 1;

    return el;
  }

  /** Снимает и возвращает элемент с хвоста */
  popBack(): T | undefined {
    if (this.isEmpty()) return undefined;
    const index = this.tailIndex;
    const el = this.buffer[index];
    this.buffer[index] = undefined;
    this._size -= 1;

    return el;
  }

  /** Элемент в голове без снятия */
  peekFront(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.buffer[this.head];
  }

  /** Элемент в хвосте без снятия */
  peekBack(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.buffer[this.tailIndex];
  }

  isEmpty() {
    return this._size === 0;
  }

  get size(): number {
    return this._size;
  }

  /** Индекс хвостового элемента в кольце */
  private get tailIndex() {
    return (this.head + this._size - 1) % this.capacity;
  }

  private isFull() {
    return this._size === this.capacity;
  }

  /** Удваивает ёмкость и перекладывает элементы в порядке от головы. */
  private resize() {
    const newCapacity = this.capacity * 2;
    const newBuffer = new Array(newCapacity);
    for (let i = 0; i < this._size; i++) {
      newBuffer[i] = this.buffer[(this.head + i) % this.capacity];
    }
    this.buffer = newBuffer;
    this.head = 0;
    this.capacity = newCapacity;
  }
}
