export interface ICell {
  r: number;
  c: number;
}

// biome-ignore format: направления — держим крестом для наглядности
export const DIRS_4 = [
           [-1, 0],
  [0, -1], /**X**/  [0, 1],
           [1, 0],
] as const;

// biome-ignore format: матрица направлений — держим 3x3 для наглядности
export const DIRS_8 = [
  [-1, -1], [-1, 0], [-1, 1],
  [ 0, -1], /**X**/  [ 0, 1],
  [ 1, -1], [ 1, 0], [ 1, 1],
] as const;
