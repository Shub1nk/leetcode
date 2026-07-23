export class Grid2D {
  private data: Uint8Array<ArrayBuffer>;
  constructor(
    private rows: number,
    private cols: number,
  ) {
    this.data = new Uint8Array(this.rows * this.cols);
  }

  inBounds(row: number, col: number): boolean {
    return 0 <= row && row < this.rows && 0 <= col && col < this.cols;
  }

  get(row: number, col: number): number {
    if (!this.inBounds(row, col)) return 0;

    return this.data[this.idx(row, col)]!;
  }

  set(row: number, col: number, value: number): void {
    if (this.inBounds(row, col)) {
      this.data[this.idx(row, col)] = value;
    }
  }
  has(row: number, col: number, value: number): boolean {
    return this.get(row, col) === value;
  }

  private idx(row: number, col: number) {
    return row * this.cols + col;
  }
}
