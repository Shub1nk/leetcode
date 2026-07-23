import { DIRS_8, type ICell, Queue } from "../../shared";

const isFreePath = (value?: number) => value === 0;
const isOccupiedPath = (value?: number) => value === 1;

// TODO: вытащить в shared
const getUint8ArrayIndex = (r: number, c: number, cols: number) => r * cols + c;

export const shortestPathInBinaryMatrix = (grid: number[][]): number => {
  const [row] = grid;
  const rows = grid.length;
  const cols = row!.length;
  const isLastCell = (r: number, c: number) => r === rows - 1 && c === cols - 1;

  const startCellValue = grid[0]![0];
  const finishCellValue = grid[rows - 1]![cols - 1];

  if (isOccupiedPath(startCellValue) || isOccupiedPath(finishCellValue)) {
    return -1;
  }

  let path = 1;
  if (isLastCell(0, 0)) return path;

  const queue = new Queue<ICell>();
  const visited = new Uint8Array(rows * cols);

  queue.enqueue({ r: 0, c: 0 });
  visited[getUint8ArrayIndex(0, 0, cols)] = 1;

  while (!queue.isEmpty()) {
    const levelSize = queue.size;

    for (let i = 0; i < levelSize; i++) {
      const currentCell = queue.dequeue();

      for (const [dr, dc] of DIRS_8) {
        const nr = currentCell.r + dr;
        const nc = currentCell.c + dc;
        const visitedNeighborIndex = getUint8ArrayIndex(nr, nc, cols);

        const currentValue = grid?.[nr]?.[nc];

        if (isLastCell(nr, nc)) {
          return path + 1;
        }

        if (isFreePath(currentValue) && !visited[visitedNeighborIndex]) {
          visited[visitedNeighborIndex] = 1;
          queue.enqueue({ r: nr, c: nc });
        }
      }
    }

    path += 1;
  }

  return -1;
};
