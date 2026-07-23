import { Grid2D } from ".";

describe("Grid2D", () => {
  it("свежая сетка - все нули", () => {
    const grid = new Grid2D(3, 4);

    expect(grid.get(0, 0)).toBe(0);
    expect(grid.get(2, 3)).toBe(0);
    expect(grid.has(1, 2, 1)).toBe(false);
    expect(grid.has(1, 2, 0)).toBe(true);
  });

  it("set → get (флаг по умолчанию)", () => {
    const grid = new Grid2D(3, 4);
    grid.set(1, 2, 1);
    expect(grid.get(1, 2)).toBe(1);
    expect(grid.has(1, 2, 1)).toBe(true);
  });

  it("Явное значение (не только 0/1)", () => {
    const grid = new Grid2D(1, 1);
    grid.set(0, 0, 5);
    expect(grid.get(0, 0)).toBe(5);
    expect(grid.has(0, 0, 1)).toBe(false);
  });

  it("Перезапись", () => {
    const grid = new Grid2D(1, 1);
    grid.set(0, 0, 1);
    expect(grid.get(0, 0)).toBe(1);
    grid.set(0, 0, 0);
    expect(grid.has(0, 0, 1)).toBe(false);
    expect(grid.has(0, 0, 0)).toBe(true);
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

  //TODO: тут бы подробнее описать не понял в чем соль
  it("Нет коллизии при переполнении столбца", () => {
    const grid = new Grid2D(2, 2);
    grid.set(0, 2, 1);
    expect(grid.get(1, 0)).toBe(0);
  });

  it("Чтение за краем → 0, без исключений", () => {
    const grid = new Grid2D(3, 3);
    expect(grid.get(-1, 0)).toBe(0);
    expect(grid.get(0, 3)).toBe(0);
    expect(grid.get(100, 100)).toBe(0);
    expect(grid.has(-1, 0, 1)).toBe(false);
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
