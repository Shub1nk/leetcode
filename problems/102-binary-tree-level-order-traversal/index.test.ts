import { buildTree } from "../../lib";
import { binaryTreeLevelOrderTraversal } from ".";

describe("binaryTreeLevelOrderTraversal", () => {
  it("должен обрабатывать канонический пример", () => {
    const data = [3, 9, 20, null, null, 15, 7];
    const expected = [[3], [9, 20], [15, 7]];
    expect(binaryTreeLevelOrderTraversal(buildTree(data))).toEqual(expected);
  });

  it("должен обработать 1 узел", () => {
    const data = [1];
    const expected = [[1]];
    expect(binaryTreeLevelOrderTraversal(buildTree(data))).toEqual(expected);
  });

  it("должен обработать пустое дерево", () => {
    const data = null;
    const expected: number[] = [];
    expect(binaryTreeLevelOrderTraversal(data)).toEqual(expected);
  });

  it("должен обработать дерево вырожденное «в цепочку» влево", () => {
    const data = [1, 2, null, 3];
    const expected = [[1], [2], [3]];
    expect(binaryTreeLevelOrderTraversal(buildTree(data))).toEqual(expected);
  });

  it("должен обработать дерево вырожденное «в цепочку» вправо", () => {
    const data = [1, null, 2, null, 3];
    const expected = [[1], [2], [3]];
    expect(binaryTreeLevelOrderTraversal(buildTree(data))).toEqual(expected);
  });

  it("должен обработать полное сбалансированное дерево", () => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    const expected = [[1], [2, 3], [4, 5, 6, 7]];
    expect(binaryTreeLevelOrderTraversal(buildTree(data))).toEqual(expected);
  });

  it("должен обработать ассиметричное дерево", () => {
    const data = [1, 2, 3, null, 4, null, 5];
    const expected = [[1], [2, 3], [4, 5]];
    expect(binaryTreeLevelOrderTraversal(buildTree(data))).toEqual(expected);
  });
});
