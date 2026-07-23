import { DIRS_4, type ICell, Queue } from "../../shared";

const isFresh = (value?: number) => value === 1;
const isRotten = (value?: number) => value === 2;

export const rottingOranges = (grid: number[][]): number => {
  let fresh = 0;
  let tick = 0;

  const queue = new Queue<ICell>();

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

      for (const [dr, dc] of DIRS_4) {
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
