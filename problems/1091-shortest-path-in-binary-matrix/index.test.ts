import { shortestPathInBinaryMatrix } from ".";

describe("shortestPathInBinaryMatrix", () => {
  it("Одна клетка, свободна", () => {
    const data = [[0]];
    expect(shortestPathInBinaryMatrix(data)).toBe(1);
  });

  it("Одна клетка, заблокирована", () => {
    const data = [[1]];
    expect(shortestPathInBinaryMatrix(data)).toBe(-1);
  });

  it("2×2 по диагонали", () => {
    const data = [
      [0, 1],
      [1, 0],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(2);
  });

  it("3x3 с leetcode", () => {
    const data = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(4);
  });

  it("Заблокирован стар", () => {
    const data = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(-1);
  });

  it("Заблокирован финиш", () => {
    const data = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(-1);
  });

  it("Стена поперёк — пути нет", () => {
    const data = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(-1);
  });

  it("3×3 всё свободно", () => {
    const data = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(3);
  });

  it("4×4 обходной путь", () => {
    const data = [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
    ];
    expect(shortestPathInBinaryMatrix(data)).toBe(6);
  });
});
