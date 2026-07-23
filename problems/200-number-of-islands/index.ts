import { DIRS_4, type ICell, Stack } from "../../shared";

const isLand = (cell?: string) => cell === "1";
const getUint8ArrayIndex = (r: number, c: number, cols: number) => r * cols + c;

export const numIslands = (grid: string[][]): number => {
  let islands = 0;
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  const visited = new Uint8Array(rows * cols);

  const findIsland = (coord: ICell) => {
    const stack = new Stack<ICell>();
    stack.push(coord);
    visited[getUint8ArrayIndex(coord.r, coord.c, cols)] = 1;

    while (!stack.isEmpty()) {
      const currentCoord = stack.pop();

      for (const [dr, dc] of DIRS_4) {
        const nr = currentCoord.r + dr;
        const nc = currentCoord.c + dc;
        const visitedNeighborIndex = getUint8ArrayIndex(nr, nc, cols);
        if (isLand(grid?.[nr]?.[nc]) && !visited[visitedNeighborIndex]) {
          visited[visitedNeighborIndex] = 1;
          stack.push({ r: nr, c: nc });
        }
      }
    }

    islands += 1;
  };

  for (const [r, row] of grid.entries()) {
    for (const [c, cell] of row.entries()) {
      if (isLand(cell) && !visited[getUint8ArrayIndex(r, c, cols)]) {
        findIsland({ r, c });
      }
    }
  }

  return islands;
};
