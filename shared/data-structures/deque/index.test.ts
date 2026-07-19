import { Deque } from ".";

describe("Deque", () => {
  describe("Базовое поведение", () => {
    it("должен проверять пустой дек или нет", () => {
      const deque = new Deque(2);
      expect(deque.isEmpty()).toBe(true);
      expect(deque.size).toBe(0);
    });

    it("pushBack: peekFront === peekBack, если в буфере 1 элемент", () => {
      const deque = new Deque(2);

      deque.pushBack(1);
      expect(deque.size).toBe(1);
      expect(deque.peekBack()).toBe(deque.peekFront());
    });

    it("pushFront: peekFront === peekBack, если в буфере 1 элемент", () => {
      const deque = new Deque(2);

      deque.pushFront(1);
      expect(deque.size).toBe(1);
      expect(deque.peekBack()).toBe(deque.peekFront());
    });
  });

  describe("FIFO / LIFO порядок", () => {
    it("должен сработать как FIFO", () => {
      const deque = new Deque(3);
      deque.pushBack(1);
      deque.pushBack(2);
      deque.pushBack(3);

      expect(deque.popFront()).toBe(1);
      expect(deque.popFront()).toBe(2);
      expect(deque.popFront()).toBe(3);
    });

    it("должен сработать как LIFO", () => {
      const deque = new Deque(3);
      deque.pushBack(1);
      deque.pushBack(2);
      deque.pushBack(3);

      expect(deque.popBack()).toBe(3);
      expect(deque.popBack()).toBe(2);
      expect(deque.popBack()).toBe(1);
    });

    it("должен сработать в смешанном порядке", () => {
      const deque = new Deque(3);
      deque.pushFront(2);
      deque.pushFront(1);
      deque.pushBack(3);

      expect(deque.popFront()).toBe(1);
      expect(deque.popFront()).toBe(2);
      expect(deque.popFront()).toBe(3);
    });
  });

  describe("Правильно обрабатывает пустой дек", () => {
    it("pop и peek методы возвращают undefined", () => {
      const deque = new Deque(2);

      expect(deque.peekBack()).toBeUndefined();
      expect(deque.peekFront()).toBeUndefined();
      expect(deque.popBack()).toBeUndefined();
      expect(deque.popFront()).toBeUndefined();
    });

    it("размер дека не меняется", () => {
      const deque = new Deque(2);

      deque.popFront();
      expect(deque.size).toBe(0);
      deque.popBack();
      expect(deque.size).toBe(0);
    });
  });

  describe("Правильно двигает head и size", () => {
    it("обрабатывает 'сворачивание дека'", () => {
      const deque = new Deque(2);
      deque.pushFront(1);

      expect(deque.size).toBe(1);
      expect(deque.peekFront()).toBe(1);
      expect(deque.popFront()).toBe(1);
      expect(deque.size).toBe(0);
    });

    it("обрабатывает наполнение дека", () => {
      const deque = new Deque(2);

      deque.pushFront(1);
      deque.pushFront(2);

      expect(deque.size).toBe(2);
      expect(deque.peekFront()).toBe(2);
      expect(deque.peekBack()).toBe(1);

      expect(deque.popBack()).toBe(1);
      expect(deque.size).toBe(1);

      deque.pushBack(1);
      expect(deque.peekBack()).toBe(1);

      deque.popFront();
      deque.popBack();

      expect(deque.isEmpty()).toBe(true);
    });
  });

  describe("Правильно увеличивает емкость дека", () => {
    it("при переполнении увеличивает емкость и сохраняет порядок элементов", () => {
      const deque = new Deque(2);

      deque.pushFront(1);
      deque.pushBack(2);
      deque.pushBack(3);

      expect(deque.size).toBe(3);
      expect(deque.popFront()).toBe(1);
      expect(deque.popFront()).toBe(2);
      expect(deque.popFront()).toBe(3);
    });
  });
});
