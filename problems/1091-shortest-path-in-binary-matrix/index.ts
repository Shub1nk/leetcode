import { DIRS_8, type ICell, Queue } from "../../shared";

interface ICellWithDist extends ICell {
  dist: number;
}

const isFreePath = (value?: number) => value === 0;
const isOccupiedPath = (value?: number) => value === 1;

export const shortestPathInBinaryMatrix = (grid: number[][]): number => {
  const rows = grid.length;
  const cols = grid[0]!.length;

  const isLastCell = (r: number, c: number) => r === rows - 1 && c === cols - 1;
  const idx = (r: number, c: number) => r * cols + c;

  const startCellValue = grid[0]![0];
  const finishCellValue = grid[rows - 1]![cols - 1];

  if (isOccupiedPath(startCellValue) || isOccupiedPath(finishCellValue)) {
    return -1;
  }

  if (isLastCell(0, 0)) return 1;

  const queue = new Queue<ICellWithDist>();
  const visited = new Uint8Array(rows * cols);

  queue.enqueue({ r: 0, c: 0, dist: 1 });
  visited[idx(0, 0)] = 1;

  while (!queue.isEmpty()) {
    const { r, c, dist } = queue.dequeue();

    for (const [dr, dc] of DIRS_8) {
      const nr = r + dr;
      const nc = c + dc;
      const visitedNeighborIndex = idx(nr, nc);

      const currentValue = grid?.[nr]?.[nc];

      if (isLastCell(nr, nc)) {
        return dist + 1;
      }

      if (isFreePath(currentValue) && !visited[visitedNeighborIndex]) {
        visited[visitedNeighborIndex] = 1;
        queue.enqueue({ r: nr, c: nc, dist: dist + 1 });
      }
    }
  }

  return -1;
};
