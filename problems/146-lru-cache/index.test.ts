import { LRUCache } from ".";

describe("lruCache", () => {
  let lruCache: LRUCache;

  beforeEach(() => {
    lruCache = new LRUCache(2);
  });
  it("должен вернуть -1, так как элемента в кеше нет", () => {
    lruCache = new LRUCache(2);

    expect(lruCache.get(1)).toEqual(-1);
    expect(lruCache.get(3)).toEqual(-1);
    expect(lruCache.get(5)).toEqual(-1);
  });

  it("должен вернуть элемента из кеша", () => {
    lruCache = new LRUCache(2);

    lruCache.put(1, 1);
    expect(lruCache.get(1)).toEqual(1);

    lruCache.put(1, 2);
    expect(lruCache.get(1)).toEqual(2);

    lruCache.put(2, 3);
    expect(lruCache.get(2)).toEqual(3);
  });

  it("должен вставлять элемент в кеш, если ключ есть а capacity заполнен", () => {
    lruCache = new LRUCache(2);
    lruCache.put(1, 1);
    lruCache.put(2, 2);
    expect(lruCache.get(1)).toEqual(1);
    lruCache.put(2, 3);
    expect(lruCache.get(2)).toEqual(3);
  });

  it("должен вернуть элемент из кеша, но с учетом capasity", () => {
    lruCache = new LRUCache(2);
    lruCache.put(1, 1);
    lruCache.put(2, 2);
    expect(lruCache.get(1)).toEqual(1);
    lruCache.put(3, 3);
    expect(lruCache.get(2)).toEqual(-1);
    lruCache.put(4, 4);
    expect(lruCache.get(1)).toEqual(-1);
    expect(lruCache.get(3)).toEqual(3);
    expect(lruCache.get(4)).toEqual(4);
  });
});
