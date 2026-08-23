# Снипеты для отправки на LeetCode

Решения в `problems/` переиспользуют структуры из `shared/` — так они читаются и так видно, где какая структура применялась. На LeetCode импортов нет, поэтому структуру приходится нести с собой.

Здесь лежат минимальные версии тех же структур: скопировал нужную, сверху приклеил решение, отправил.

**Главное правило файла: имена методов совпадают с `shared/`.** Поэтому тело решения при отправке править не нужно вообще — меняется только то, откуда взялся класс.

Два отличия от «настоящих» версий, оба сознательные:

- **нет проверок на пустоту.** В `shared/` `dequeue()` из пустой очереди бросает `QueueUnderflowError`, здесь вернёт `undefined`. Алгоритм, который так делает, всё равно сломан, а на LeetCode лишние проверки только жрут время;
- **память не переиспользуется.** Вместо кольцевого буфера — обычный массив с указателем `head`: снятое с головы физически остаётся лежать. Расход `O(n)` вместо `O(k)`, зато все операции честные `O(1)` и кода в пять раз меньше.

Типы написаны под конфиг LeetCode, где `noUncheckedIndexedAccess` выключен, — потому без `!` на каждом обращении по индексу.

---

## Очередь

### Вариант 1 — обход по уровням, без класса вообще

Когда нужен именно **уровень целиком** (глубина дерева, level order), очередь не нужна. Два массива дают границу уровня бесплатно, без счётчика `levelSize`:

```typescript
let level: TreeNode[] = root ? [root] : [];
let depth = 0;

while (level.length > 0) {
  depth += 1;
  const next: TreeNode[] = [];

  for (const node of level) {
    if (node.left) next.push(node.left);
    if (node.right) next.push(node.right);
  }

  level = next;
}
```

Каждый узел ровно один раз кладётся в `next` и один раз читается — `O(n)`.

### Вариант 2 — обычная очередь, массив с указателем

Когда уровни не важны, а нужен просто FIFO:

```typescript
class Queue<T> {
  private items: T[] = [];
  private head = 0;

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T {
    return this.items[this.head++];
  }

  peek(): T {
    return this.items[this.head];
  }

  get size(): number {
    return this.items.length - this.head;
  }

  isEmpty(): boolean {
    return this.head >= this.items.length;
  }
}
```

`shift()` вместо указателя писать нельзя: он сдвигает весь массив, то есть стоит `O(m)`, и линейный алгоритм превращается в квадратичный.

---

## Дек

Для монотонного дека хватает пяти операций — `pushFront` не нужен ни разу, поэтому его здесь и нет (с указателем `head` он неудобен):

```typescript
class Deque<T> {
  private items: T[] = [];
  private head = 0;

  pushBack(item: T) {
    this.items.push(item);
  }

  popBack(): T {
    return this.items.pop();
  }

  popFront(): T {
    return this.items[this.head++];
  }

  peekBack(): T {
    return this.items[this.items.length - 1];
  }

  peekFront(): T {
    return this.items[this.head];
  }

  get size(): number {
    return this.items.length - this.head;
  }

  isEmpty(): boolean {
    return this.head >= this.items.length;
  }
}
```

`popBack` снимает с настоящего конца массива, поэтому с указателем `head` не конфликтует — при непустом деке до него не дотянется.

---

## Стек

Отдельный класс не нужен: обычный массив уже стек.

```typescript
const stack: number[] = [];

stack.push(value);            // push
const top = stack.pop();      // pop
const peek = stack[stack.length - 1];   // peek
const empty = stack.length === 0;       // isEmpty
```

`at(-1)` вместо `[length - 1]` тоже работает и читается лучше.

---

## Union-Find

Версия в `shared/` обобщённая — работает с любыми ключами через `Map`. На LeetCode почти всегда достаточно числовой: вершины пронумерованы от нуля.

```typescript
class UnionFind {
  private parent: number[];
  private componentSize: number[];
  count: number;

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, index) => index);
    this.componentSize = new Array(size).fill(1);
    this.count = size;
  }

  find(x: number): number {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];   // сжатие пути
      x = this.parent[x];
    }
    return x;
  }

  union(a: number, b: number): boolean {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return false;

    if (this.componentSize[rootA] < this.componentSize[rootB]) {
      this.parent[rootA] = rootB;
      this.componentSize[rootB] += this.componentSize[rootA];
    } else {
      this.parent[rootB] = rootA;
      this.componentSize[rootA] += this.componentSize[rootB];
    }

    this.count -= 1;
    return true;
  }

  connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }
}
```

Отличие от `shared`-версии: `count` тут обычное поле, а не геттер, и нет `add` — размер задаётся в конструкторе.

---

## Сетка

`Grid2D` инлайнить не стоит — проще написать две вещи, ради которых он существует, прямо в решении:

```typescript
const rows = grid.length;
const cols = grid[0].length;

const inBounds = (row: number, col: number) =>
  row >= 0 && row < rows && col >= 0 && col < cols;

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (const [deltaRow, deltaCol] of DIRECTIONS) {
  const nextRow = row + deltaRow;
  const nextCol = col + deltaCol;
  if (!inBounds(nextRow, nextCol)) continue;
  // ...
}
```

Если нужны диагонали — добавить четыре пары со всеми комбинациями `±1`.

---

## Однострочники

Их проще написать заново, чем искать:

```typescript
const getMid = (left: number, right: number) => left + Math.floor((right - left) / 2);

const isInt32 = (value: number) => value >= -(2 ** 31) && value <= 2 ** 31 - 1;
```
