import type { TreeNode } from "../../lib";
import { Queue } from "../../shared";

export const binaryTreeLevelOrderTraversal = (root: TreeNode | null): number[][] => {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  const queue = new Queue<TreeNode>();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const levelSize = queue.size;
    const level: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.dequeue();
      level.push(node.val);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    result.push(level);
  }

  return result;
};
