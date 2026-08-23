import type { TreeNode } from "../../lib";

import { isLeafNode } from "./common";

export const minimumDepthOfBinaryTree = (root: TreeNode | null): number => {
  let minDepth = Infinity;

  const dfs = (node: TreeNode | null, depth: number) => {
    if (node === null) return;

    if (depth >= minDepth) return;

    if (isLeafNode(node)) {
      // выше отсекли всё, где depth >= minDepth, значит здесь строго меньше
      minDepth = depth;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 1);

  return root ? minDepth : 0;
};
