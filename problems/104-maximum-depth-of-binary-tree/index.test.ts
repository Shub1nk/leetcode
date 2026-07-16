import { buildTree } from "../../lib/build-tree";
import { maximumDepthOfBinaryTree } from ".";

describe("maximumDepthOfBinaryTree", () => {
  describe("пустое дерево", () => {
    it("должен вернуть 0, так как дерева нет", () => {
      expect(maximumDepthOfBinaryTree(null)).toEqual(0);
    });
  });

  describe("уход в правые ветки", () => {
    it("1. должен вернуть глубину дерева", () => {
      expect(maximumDepthOfBinaryTree(buildTree([100]))).toEqual(1);
    });

    it("2. должен вернуть глубину дерева", () => {
      expect(maximumDepthOfBinaryTree(buildTree([1, null, 2]))).toEqual(2);
    });

    it("3. должен вернуть глубину дерева", () => {
      expect(maximumDepthOfBinaryTree(buildTree([3, 9, 20, null, null, 15, 7]))).toEqual(3);
    });
  });

  describe("уход в левые ветки", () => {
    it("1. должен вернуть глубину дерева", () => {
      expect(maximumDepthOfBinaryTree(buildTree([1, 2, 3, 4]))).toEqual(3);
    });

    it("2. должен вернуть глубину дерева", () => {
      expect(maximumDepthOfBinaryTree(buildTree([1, 2, 3, 4, null, 5, 6, 7]))).toEqual(4);
    });
  });
});
