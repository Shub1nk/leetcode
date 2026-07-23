import { Grid2D } from ".";

describe("Grid2D", () => {
  it("свежая сетка - все нули", () => {
    const grid = new Grid2D(3, 4);

    expect(grid.get(0, 0)).toBe(0);
    expect(grid.get(2, 3)).toBe(0);
    expect(grid.get(1, 2)).toBe(0);
  });

  it("Явное значение (не только 0/1)", () => {
    const grid = new Grid2D(1, 1);
    grid.set(0, 0, 5);
    expect(grid.get(0, 0)).toBe(5);
  });

  it("Перезапись", () => {
    const grid = new Grid2D(1, 1);
    grid.set(0, 0, 1);
    expect(grid.get(0, 0)).toBe(1);
    grid.set(0, 0, 0);
    expect(grid.get(0, 0)).toBe(0);
  });

  it("Прямоугольная сетка — не путаем rows и cols", () => {
    const grid = new Grid2D(2, 3);
    expect(grid.inBounds(0, 2)).toBe(true);
    expect(grid.inBounds(1, 2)).toBe(true);
    expect(grid.inBounds(2, 0)).toBe(false);
    expect(grid.inBounds(0, 3)).toBe(false);
    grid.set(1, 2, 1);
    expect(grid.get(1, 2)).toBe(1);
  });

  // Соль: на сетке 2x2 (cols=2) столбец 2 — вне границ. Без гарда inBounds
  // индекс был бы 0*2 + 2 = 2, но это ровно индекс клетки (1,0): 1*2 + 0 = 2.
  // То есть запись «утекла» бы в чужую клетку. Гард делает set(0,2) no-op,
  // поэтому (1,0) остаётся 0 — этот тест ловит именно потерю встроенных границ.
  it("Нет коллизии при переполнении столбца", () => {
    const grid = new Grid2D(2, 2);
    grid.set(0, 2, 1);
    expect(grid.get(1, 0)).toBe(0);
  });

  it("Чтение за краем → 0, без исключений", () => {
    const grid = new Grid2D(3, 3);
    expect(grid.get(-1, 0)).toBe(0); // строка < 0
    expect(grid.get(0, -1)).toBe(0); // столбец < 0
    expect(grid.get(3, 0)).toBe(0); // строка = rows (за нижним краем)
    expect(grid.get(0, 3)).toBe(0); // столбец = cols (за правым краем)
    expect(grid.get(100, 100)).toBe(0); // далеко за краем
  });

  it("Запись за краем ничего не портит", () => {
    const grid = new Grid2D(3, 3);
    grid.set(-1, 0, 1);
    grid.set(3, 3, 1);
    grid.set(0, 5, 1);
    expect(grid.get(0, 0)).toBe(0);
  });

  it("Угловые клетки", () => {
    const grid = new Grid2D(2, 3);
    grid.set(0, 0, 1);
    grid.set(1, 2, 255);
    expect(grid.get(0, 0)).toBe(1);
    expect(grid.get(1, 2)).toBe(255);
  });

  it("В ячейки пишутся только числа от 0 до 255", () => {
    const grid = new Grid2D(1, 1);
    grid.set(0, 0, 0);
    expect(grid.get(0, 0)).toBe(0);

    grid.set(0, 0, 255);
    expect(grid.get(0, 0)).toBe(255);

    grid.set(0, 0, 256);
    expect(grid.get(0, 0)).toBe(0);
  });
});
