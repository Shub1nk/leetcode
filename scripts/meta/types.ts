/**
 * Типизированная мета по решённой задаче. Лежит рядом с решением в
 * `problems/<id>-<slug>/meta.ts` и собирается в `problems/index.json`
 * скриптом `scripts/build-meta-index.ts` (`yarn build-meta`).
 *
 * Словари (`Technique` / `DataStructure` / `SharedUtil`) — контролируемые:
 * любой новый тег добавляется сюда осознанно, опечатка падает при сборке.
 * Конвенция значений — lowercase-kebab.
 */

export type Difficulty = "easy" | "medium" | "hard";

/** Алгоритм/приём, который реально использует решение. По нему строятся срезы. */
export type Technique =
  | "math"
  | "hash-map"
  | "greedy"
  | "binary-search"
  | "dfs"
  | "adjacency-list"
  | "connected-components"
  | "generator"
  | "recursion";

/** Структуры данных, задействованные в решении. */
export type DataStructure =
  | "array"
  | "map"
  | "stack"
  | "graph"
  | "linked-list"
  | "tree"
  | "binary-search-tree";

/** Утилиты из `shared/`, которые решение реально импортит. */
export type SharedUtil = "stack" | "is-int32" | "math-reverse-integer";

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
  /** Алгоритмы/приёмы, использованные в решении. */
  techniques: Technique[];
  /** Структуры данных, задействованные в решении. */
  dataStructures: DataStructure[];
  /** Какие утилиты из `shared/` уже подключены. Пусто = ещё на «сыром» коде. */
  usesShared: SharedUtil[];
}
