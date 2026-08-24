/**
 * Типизированная мета по решённой задаче. Лежит рядом с решением в
 * `problems/<id>-<slug>/meta.ts` и собирается в `problems/index.json`
 * скриптом `scripts/build-meta-index.ts` (`yarn build-meta`).
 *
 * Словари (`Technique` / `DataStructure` / `SharedUtil`) — контролируемые:
 * любой новый тег добавляется сюда осознанно, опечатка падает при сборке.
 * Конвенция значений — lowercase-kebab.
 *
 * Одну задачу можно решить разными способами, поэтому теги решения живут не
 * плоско, а в `approaches[]` — по элементу на подход (см. `Approach`).
 */

export type Difficulty = "easy" | "medium" | "hard";

/** Алгоритм/приём, который реально использует подход. По нему строятся срезы. */
export type Technique =
  | "math"
  | "hash-map"
  | "greedy"
  | "binary-search"
  | "dfs"
  | "bfs"
  | "backtracking"
  | "adjacency-list"
  | "connected-components"
  | "generator"
  | "recursion"
  | "sliding-window"
  | "monotonic-deque"
  | "monotonic-stack"
  | "two-pointers"
  | "kruskal"
  | "prim"
  | "minimum-spanning-tree";

/** Структуры данных, задействованные в подходе. */
export type DataStructure =
  | "array"
  | "map"
  | "set"
  | "stack"
  | "queue"
  | "deque"
  | "graph"
  | "linked-list"
  | "tree"
  | "binary-search-tree"
  | "union-find";

/** Утилиты из `shared/`, которые подход реально импортит. */
export type SharedUtil =
  | "stack"
  | "queue"
  | "deque"
  | "grid"
  | "union-find"
  | "get-mid"
  | "is-int32"
  | "math-reverse-integer";

/**
 * Один подход к решению задачи. Порядок в `approaches` — **исторический**:
 * первым идёт тот, с которого начали, дальше — как улучшали. Какой из них
 * лучший, написано в `README.md` задачи.
 */
export interface Approach {
  /** Короткое имя подхода-алгоритма, lowercase-kebab: "kruskal", "prim", "dfs". */
  name: string;
  /** Файл решения, когда подходов несколько ("kruskal.ts"). Опускается для одиночного index.ts. */
  file?: string;
  /** Алгоритмы/приёмы этого подхода. */
  techniques: Technique[];
  /** Структуры данных этого подхода. */
  dataStructures: DataStructure[];
  /** Утилиты из `shared/`, которые импортит этот подход. */
  usesShared: SharedUtil[];
}

export interface ProblemMeta {
  /** Номер задачи на LeetCode. */
  id: number;
  /** Slug из URL (папка без числового префикса). */
  slug: string;
  /** Человекочитаемое название. */
  title: string;
  /** Сложность по версии LeetCode. */
  difficulty: Difficulty;
  /** Ссылка на условие на LeetCode. */
  url: string;
  /** Статус решения. */
  status: "solved" | "todo";
  /** Дата решения, ISO `YYYY-MM-DD`. */
  solvedAt: string;
  /** Официальные теги LeetCode (свободные строки, lowercase-kebab). */
  topics: string[];
  /**
   * Подходы к решению. Первый — основной. Скаффолд кладёт сюда заготовку с
   * именем и файлом подхода и пустыми тегами — теги дозаполняются по решении.
   */
  approaches: Approach[];
}
