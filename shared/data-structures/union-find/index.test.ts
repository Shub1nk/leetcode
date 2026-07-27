import { UNION_FIND_ERROR_ELEMENT_NOT_FOUND, UnionFind } from ".";

describe("UnionFind", () => {
  describe("Конструкция/регистрация", () => {
    it("инициализация пустого UnionFind возвращает пустой count", () => {
      const unionFind = new UnionFind();
      expect(unionFind.count).toBe(0);
    });

    it("возвращает количество элементов", () => {
      const unionFind = new UnionFind([1, 2, 3]);
      expect(unionFind.count).toBe(3);
    });

    it("возвращает количество элементов учитывая дубликаты", () => {
      const unionFind = new UnionFind([1, 1, 2]);
      expect(unionFind.count).toBe(2);
    });

    it("меняет count при добавлении элементов", () => {
      const unionFind = new UnionFind([1]);
      expect(unionFind.count).toBe(1);

      unionFind.add(2);
      expect(unionFind.count).toBe(2);

      unionFind.add(2);
      expect(unionFind.count).toBe(2);
    });
  });

  describe("find", () => {
    it("должен выбросить ошибку, если запрашиваем несуществующий элемент на пустых данных", () => {
      const uf = new UnionFind();
      expect(() => uf.find("a")).toThrow(UNION_FIND_ERROR_ELEMENT_NOT_FOUND);
    });

    it("должен выбросить ошибку, если запрашиваем несуществующий элемент", () => {
      const uf = new UnionFind(["a", "b"]);
      expect(() => uf.find("c")).toThrow(UNION_FIND_ERROR_ELEMENT_NOT_FOUND);
    });

    it("должен отрабатывать идемпотентно", () => {
      const uf = new UnionFind(["a", "b"]);
      expect(uf.find("a")).toBe("a");
      expect(uf.find("a")).toBe("a");
    });
  });

  describe("union", () => {
    it("должен связывать 2 элемента", () => {
      const uf = new UnionFind(["a", "b"]);
      expect(uf.count).toBe(2);
      expect(uf.union("a", "b")).toBe(true);
      expect(uf.connected("a", "b")).toBe(true);
      expect(uf.count).toBe(1);
    });

    it("не должен связывать 2 элемента, если они уже связаны", () => {
      const uf = new UnionFind(["a", "b"]);
      expect(uf.count).toBe(2);
      expect(uf.union("a", "b")).toBe(true);
      expect(uf.connected("a", "b")).toBe(true);
      expect(uf.count).toBe(1);

      expect(uf.union("a", "b")).toBe(false);
      expect(uf.count).toBe(1);
    });

    it("не должен связывать элемент с самим собой", () => {
      const uf = new UnionFind(["a"]);
      expect(uf.union("a", "a")).toBe(false);
      expect(uf.connected("a", "a")).toBe(true);
      expect(uf.count).toBe(1);
    });

    it("должен бросать исключение, если пытаемся связать с несуществующим элементом", () => {
      const uf = new UnionFind(["a"]);
      expect(() => uf.union("a", "c")).toThrow(UNION_FIND_ERROR_ELEMENT_NOT_FOUND);
    });
  });

  describe("size", () => {
    it("должен выводить количество связей", () => {
      const uf = new UnionFind(["a", "b"]);
      expect(uf.size("a")).toBe(1);
      uf.union("a", "b");
      expect(uf.size("a")).toBe(2);
      expect(uf.size("b")).toBe(2);
    });
  });

  describe("проверяет работу нескольких методов в связке", () => {
    it("пример 1", () => {
      const uf = new UnionFind([1, 2, 3]);
      expect(uf.count).toBe(3);

      uf.union(1, 2);
      uf.union(2, 3);
      expect(uf.connected(1, 3)).toBe(true);
    });

    it("пример 2", () => {
      const uf = new UnionFind([1, 2, 3, 4]);
      expect(uf.count).toBe(4);

      uf.union(1, 2);
      uf.union(3, 4);
      uf.union(2, 3);
      expect(uf.connected(1, 4)).toBe(true);
      expect(uf.count).toBe(1);
      expect(uf.size(1)).toBe(4);
      expect(uf.size(2)).toBe(4);
      expect(uf.size(3)).toBe(4);
      expect(uf.size(4)).toBe(4);
    });
  });

  describe("Склеивает маленькое дерево с большим", () => {
    it("пример 1", () => {
      const fu = new UnionFind([1, 2, 3, 4, 5]);

      fu.union(1, 2);
      fu.union(2, 3);
      fu.union(3, 4);
      expect(fu.count).toBe(2);
      expect(fu.size(5)).toBe(1);
      expect(fu.size(1)).toBe(4);
      fu.union(4, 5);
      expect(fu.count).toBe(1);
      expect(fu.size(1)).toBe(5);
      expect(fu.size(3)).toBe(5);
      expect(fu.size(5)).toBe(5);
    });

    it("пример 2", () => {
      const fu = new UnionFind([1, 2, 3, 4, 5]);

      fu.union(1, 2);
      fu.union(2, 3);
      fu.union(3, 4);
      expect(fu.count).toBe(2);
      expect(fu.size(5)).toBe(1);
      expect(fu.size(1)).toBe(4);
      fu.union(5, 1);
      expect(fu.count).toBe(1);
      expect(fu.size(1)).toBe(5);
      expect(fu.size(3)).toBe(5);
      expect(fu.size(5)).toBe(5);
    });
  });

  describe("Склеивает длинную цепочку в 1000 элементов", () => {
    it("пример 1", () => {
      const items = 1_000;
      const uf = new UnionFind(Array.from({ length: items }).map((_, i) => i));
      for (let i = 0; i < items - 1; i++) {
        uf.union(i, i + 1);

        expect(uf.connected(i, i + 1)).toBe(true);
      }

      expect(uf.connected(0, items - 1)).toBe(true);
      expect(uf.count).toBe(1);
      expect(() => uf.find(0)).not.toThrow();
      expect(uf.size(0)).toBe(items);
    });
  });
});
