import type { TTupleCoord } from ".";
import { minCostToConnectAllPoints } from ".";

describe("minCostToConnectAllPoints", () => {
  it("Leetcode пример 1", () => {
    const data: TTupleCoord[] = [
      [0, 0],
      [2, 2],
      [3, 10],
      [5, 2],
      [7, 0],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(20);
  });

  it("Leetcode пример 2", () => {
    const data: TTupleCoord[] = [
      [3, 12],
      [-2, 5],
      [-4, 1],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(18);
  });

  it("Одна точка", () => {
    const data: TTupleCoord[] = [[0, 0]];
    expect(minCostToConnectAllPoints(data)).toBe(0);
  });

  it("Пустой массив", () => {
    const data: TTupleCoord[] = [];
    expect(minCostToConnectAllPoints(data)).toBe(0);
  });

  it("Две точки", () => {
    const data: TTupleCoord[] = [
      [0, 0],
      [1, 1],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(2);
  });

  it("Дубликаты", () => {
    const data: TTupleCoord[] = [
      [0, 0],
      [0, 0],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(0);
  });

  it("Отрицательные", () => {
    const data: TTupleCoord[] = [
      [-1, -1],
      [1, 1],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(4);
  });

  it("Точки на одной линии", () => {
    const data: TTupleCoord[] = [
      [0, 0],
      [0, 1],
      [0, 2],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(2);
  });

  it("Квадрат (цикл)", () => {
    const data: TTupleCoord[] = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ];
    expect(minCostToConnectAllPoints(data)).toBe(3);
  });
});
