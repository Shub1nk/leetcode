import { QUEUE_ERROR_EMPTY, Queue } from ".";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("должен вернуть true, если очередь пустая", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it("должен вернуть размер очереди 0", () => {
    expect(queue.size).toBe(0);
  });

  it("должен добавить элемент в очередь", () => {
    queue.enqueue(1);
    expect(queue.size).toBe(1);
  });

  it("должен вернуть элемент из очереди и удалить его", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);

    const element = queue.dequeue();
    expect(element).toBe(1);

    expect(queue.size).toBe(1);
  });

  it("должен вернуть элемент, что на данный момент находится первым в очереди", () => {
    queue.enqueue(1);
    expect(queue.size).toBe(1);

    queue.enqueue(3);
    expect(queue.size).toBe(2);
    expect(queue.peek()).toBe(1);
    expect(queue.size).toBe(2);
  });

  it("должен кидать ошибку, если пытаются запросить из пустой очереди элемент", () => {
    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(() => queue.dequeue()).toThrow(QUEUE_ERROR_EMPTY);
    expect(() => queue.peek()).toThrow(QUEUE_ERROR_EMPTY);
  });

  it("должен вернуть элементы очереди согласно FIFO", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
});
