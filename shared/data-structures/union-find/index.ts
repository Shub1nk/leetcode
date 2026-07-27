export const UNION_FIND_ERROR_ELEMENT_NOT_FOUND = "Union Find element not found";

class UnknownElementError extends Error {
  constructor() {
    super(UNION_FIND_ERROR_ELEMENT_NOT_FOUND);
    this.name = "UnknownElementError";
  }
}

export class UnionFind<T> {
  private _count = 0;
  private parent = new Map<T, T>();
  private sizes = new Map<T, number>();

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

  add(x: T): void {
    if (this.parent.has(x)) return;

    this.parent.set(x, x);
    this.sizes.set(x, 1);
    this._count++;
  }

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

  connected(a: T, b: T): boolean {
    return this.find(a) === this.find(b);
  }

  size(x: T): number {
    return this.sizes.get(this.find(x))!;
  }

  get count(): number {
    return this._count;
  }
}
