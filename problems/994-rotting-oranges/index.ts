import { Queue } from "../../shared";

interface IGridCell {
  r: number;
  c: number;
}

// TODO: уже 2 раз попадается, надо в shared/constants выносить
const DIRS = [
  [-1, 0], // вверх
  [1, 0], // вниз
  [0, -1], // влево
  [0, 1], // вправо
] as const;

const isFresh = (value?: number) => value === 1;
const isRotten = (value?: number) => value === 2;

export const rottingOranges = (grid: number[][]): number => {
  let fresh = 0;
  let tick = 0;

  const queue = new Queue<IGridCell>();

  // шаг инициализации
  for (const [r, row] of grid.entries()) {
    for (const [c, cell] of row.entries()) {
      if (isRotten(cell)) {
        queue.enqueue({ r, c });
      }

      if (isFresh(cell)) {
        fresh += 1;
      }
    }
  }

  if (fresh === 0) {
    return 0;
  }

  if (queue.isEmpty()) {
    return -1;
  }

  // шаг для BFS;
  while (!queue.isEmpty()) {
    const levelSize = queue.size;
    let rottedThisLevel = false;

    for (let i = 0; i < levelSize; i++) {
      const currentCell = queue.dequeue();

      for (const [dr, dc] of DIRS) {
        const nr = currentCell.r + dr;
        const nc = currentCell.c + dc;

        const currentValue = grid?.[nr]?.[nc];

        if (isFresh(currentValue)) {
          grid[nr]![nc] = 2;
          rottedThisLevel = true;
          fresh -= 1;

          queue.enqueue({ r: nr, c: nc });
        }
      }
    }

    if (rottedThisLevel) {
      tick++;
    }
  }

  return fresh > 0 ? -1 : tick;
};
