// TODO: подумать над вынесением в отдельный DoubleLinkedList<T>
class LRUNode {
  prev: LRUNode | null = null;
  next: LRUNode | null = null;

  constructor(
    public key: number,
    public value: number,
  ) {}
}

export class LRUCache {
  private cache = new Map<number, LRUNode>();
  private head = new LRUNode(0, 0);
  private tail = new LRUNode(0, 0);

  constructor(private capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private remove(node: LRUNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private addToHead(node: LRUNode) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next!.prev = node;
    this.head.next = node;
  }

  private moveToHead(node: LRUNode) {
    this.remove(node);
    this.addToHead(node);
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.moveToHead(node);

      return node.value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToHead(node);
    } else {
      const node = new LRUNode(key, value);
      this.addToHead(node);
      this.cache.set(key, node);
    }

    if (this.cache.size > this.capacity) {
      const oldest = this.tail.prev!;
      this.cache.delete(oldest.key);
      this.remove(oldest);
    }
  }
}
