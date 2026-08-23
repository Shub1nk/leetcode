import type { TreeNode } from "../../lib";
import { Queue } from "../../shared";

import { isLeafNode } from "./common";

export const minimumDepthOfBinaryTree = (root: TreeNode | null): number => {
  const queue = new Queue<TreeNode>();

  if (root !== null) {
    queue.enqueue(root);
  }

  let depth = 0;

  while (!queue.isEmpty()) {
    depth += 1;
    const levelSize = queue.size;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.dequeue();

      if (isLeafNode(node)) return depth;

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }

  // сюда попадаем, если очередь сразу была пустой, то есть дерева не существует
  return 0;
};
