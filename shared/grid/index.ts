export interface ICell {
  r: number;
  c: number;
}

export const DIRS_4 = [
  [-1, 0], // вверх
  [1, 0], // вниз
  [0, -1], // влево
  [0, 1], // вправо
] as const;
