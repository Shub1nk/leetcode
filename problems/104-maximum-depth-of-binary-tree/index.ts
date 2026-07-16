import { TreeNode } from "../../lib";

export const maximumDepthOfBinaryTree = (root: TreeNode | null): number => {
  if (root === null) return 0;

  return Math.max(maximumDepthOfBinaryTree(root.left), maximumDepthOfBinaryTree(root.right)) + 1;
};
