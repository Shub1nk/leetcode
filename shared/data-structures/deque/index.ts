export class Deque<T> {
  private buffer: Array<T | undefined>;
  private head: number = 0;
  private _size: number = 0;

  constructor(private capacity = 8) {
    this.buffer = new Array(capacity);
  }

  pushFront(el: T) {
    if (this.isFull()) {
      this.resize();
    }
    this.head = (this.head - 1 + this.capacity) % this.capacity;
    this.buffer[this.head] = el;
    this._size += 1;
  }

  pushBack(el: T) {
    if (this.isFull()) {
      this.resize();
    }
    const index = (this.head + this._size) % this.capacity;
    this.buffer[index] = el;
    this._size += 1;
  }

  popFront(): T | undefined {
    if (this.isEmpty()) return undefined;
    const el = this.buffer[this.head];
    this.buffer[this.head] = undefined;

    this.head = (this.head + 1) % this.capacity;
    this._size -= 1;

    return el;
  }

  popBack(): T | undefined {
    if (this.isEmpty()) return undefined;
    const index = this.tailIndex;
    const el = this.buffer[index];
    this.buffer[index] = undefined;
    this._size -= 1;

    return el;
  }

  peekFront(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.buffer[this.head];
  }

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

  private get tailIndex() {
    return (this.head + this._size - 1) % this.capacity;
  }

  private isFull() {
    return this._size === this.capacity;
  }

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
