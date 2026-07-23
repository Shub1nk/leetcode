import type { ICell } from "../../shared";
import { DIRS_4, Grid2D, Stack } from "../../shared";

const isLand = (cell?: string) => cell === "1";

export const numIslands = (grid: string[][]): number => {
  let islands = 0;
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  const visited = new Grid2D(rows, cols);

  const findIsland = (coord: ICell) => {
    const stack = new Stack<ICell>();
    stack.push(coord);
    visited.set(coord.r, coord.c, 1);

    while (!stack.isEmpty()) {
      const currentCoord = stack.pop();

      for (const [dr, dc] of DIRS_4) {
        const nr = currentCoord.r + dr;
        const nc = currentCoord.c + dc;
        if (isLand(grid?.[nr]?.[nc]) && visited.get(nr, nc) === 0) {
          visited.set(nr, nc, 1);
          stack.push({ r: nr, c: nc });
        }
      }
    }

    islands += 1;
  };

  for (const [r, row] of grid.entries()) {
    for (const [c, cell] of row.entries()) {
      if (isLand(cell) && visited.get(r, c) === 0) {
        findIsland({ r, c });
      }
    }
  }

  return islands;
};
