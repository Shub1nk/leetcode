export const UNION_FIND_ERROR_ELEMENT_NOT_FOUND = "Union Find element not found";

class UnknownElementError extends Error {
  constructor() {
    super(UNION_FIND_ERROR_ELEMENT_NOT_FOUND);
    this.name = "UnknownElementError";
  }
}

/**
 * Disjoint Set Union (система непересекающихся множеств) по значениям `T`.
 *
 * Хранит лес множеств в {@link Map} (`parent`), поэтому `T` — любой ключ, не только индекс.
 * Две оптимизации держат операции почти константными: сжатие путей в {@link find}
 * и объединение по размеру в {@link union} (меньшее дерево цепляется к большему).
 *
 *
 * Элементы нужно завести заранее — через конструктор или {@link add}; обращение
 * к незнакомому элементу бросает {@link UnknownElementError}({@link UNION_FIND_ERROR_ELEMENT_NOT_FOUND}).
 *
 * @example
 * const uf = new UnionFind([1, 2, 3]);
 * uf.union(1, 2);
 * uf.connected(1, 2); // true
 * uf.count;           // 2 компоненты: {1,2} и {3}
 */
export class UnionFind<T> {
  private _count = 0;
  private parent = new Map<T, T>();
  private sizes = new Map<T, number>();

  /**
   * @param items Элементы, которые сразу заводятся как отдельные множества.
   *   Дубликаты игнорируются.
   */
  constructor(items: Iterable<T> = []) {
    for (const x of items) {
      this.add(x);
    }
  }

  private assertExists(x: T) {
    if (!this.parent.has(x)) {
      throw new UnknownElementError();
    }
  }

  /** Заводит новый элемент как одиночное множество; повтор — no-op. */
  add(x: T): void {
    if (this.parent.has(x)) return;

    this.parent.set(x, x);
    this.sizes.set(x, 1);
    this._count++;
  }

  /**
   * Корень множества элемента, со сжатием путей по дороге.
   * @throws {UnknownElementError} если `x` не заведён.
   */
  find(x: T) {
    let currentX = x;
    this.assertExists(currentX);

    let root = currentX;
    while (this.parent.get(root) !== root) {
      root = this.parent.get(root)!;
    }
    while (this.parent.get(currentX) !== root) {
      const next = this.parent.get(currentX)!;
      this.parent.set(currentX, root);
      currentX = next;
    }
    return root;
  }

  /**
   * Объединяет множества `a` и `b` (меньшее к большему).
   * @returns `false`, если они уже в одном множестве — слияния не было.
   * @throws {UnknownElementError} если `a` или `b` не заведён.
   */
  union(a: T, b: T): boolean {
    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA === rootB) return false;

    const sizeB = this.sizes.get(rootB)!;
    const sizeA = this.sizes.get(rootA)!;

    const [big, small] = sizeA >= sizeB ? [rootA, rootB] : [rootB, rootA];
    this.parent.set(small, big);
    this.sizes.set(big, sizeA + sizeB);
    this._count--;
    return true;
  }

  /** Лежат ли `a` и `b` в одном множестве. */
  connected(a: T, b: T): boolean {
    return this.find(a) === this.find(b);
  }

  /** Размер множества, которому принадлежит `x`. */
  size(x: T): number {
    return this.sizes.get(this.find(x))!;
  }

  /** Число непересекающихся множеств */
  get count(): number {
    return this._count;
  }
}
