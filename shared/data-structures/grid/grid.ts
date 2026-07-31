/**
 * Плоское 2D-хранилище байтов ({@link Uint8Array}) с адресацией по (row, col).
 *
 * Прячет вычисление плоского индекса `row * cols + col` и аллокацию массива,
 * убирая типовые ошибки grid-задач: путаницу «индекс vs счётчик», подмену
 * `rows`↔`cols` и коллизии при выходе за границу.
 *
 * Все обращения безопасны на краях: чтение за границей возвращает `0`,
 * запись за границей — no-op (клетка соседней строки не будет задета).
 *
 * Значение в клетке — байт `0..255`. Типичное применение — `visited`
 * (`set(r, c, 1)` / `get(r, c)`); для дистанций/меток свыше 255 нужна
 * более широкая разрядность (отдельная сетка).
 *
 * @example
 * const visited = new Grid2D(rows, cols);
 * visited.set(0, 0, 1);
 * if (visited.get(nr, nc)) continue; // уже посещали
 */
export class Grid2D {
  private data: Uint8Array<ArrayBuffer>;

  /**
   * @param rows Число строк (счётчик, не индекс). Валидные строки: `0..rows-1`.
   * @param cols Число столбцов (счётчик, не индекс). Валидные столбцы: `0..cols-1`.
   */
  constructor(
    private rows: number,
    private cols: number,
  ) {
    this.data = new Uint8Array(this.rows * this.cols);
  }

  /**
   * Лежит ли клетка внутри сетки.
   * @returns `true`, если `(row, col)` — валидная клетка.
   */
  inBounds(row: number, col: number): boolean {
    return 0 <= row && row < this.rows && 0 <= col && col < this.cols;
  }

  /**
   * Значение клетки. Для клеток за границей возвращает `0`.
   * @returns Байт `0..255`, либо `0` если `(row, col)` вне сетки.
   */
  get(row: number, col: number): number {
    if (!this.inBounds(row, col)) return 0;

    return this.data[this.idx(row, col)]!;
  }

  /**
   * Записывает значение в клетку. Запись за границей игнорируется.
   * @param value Байт `0..255` (значения вне диапазона завернутся по модулю 256).
   */
  set(row: number, col: number, value: number): void {
    if (this.inBounds(row, col)) {
      this.data[this.idx(row, col)] = value;
    }
  }

  /** Плоский индекс клетки в {@link data}: `row * cols + col`. */
  private idx(row: number, col: number) {
    return row * this.cols + col;
  }
}
