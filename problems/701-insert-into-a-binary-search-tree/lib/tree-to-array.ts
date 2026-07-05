import { TreeNode } from ".";

export const treeToArray = (root: TreeNode | null): (number | null)[] => {
  if (root === null) return [];

  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    // FIXME: нужно будет реализовать class Queue, чтобы доступ был O(1) при работе с массивом
    const node = queue.shift()!;

    if (node === null) {
      result.push(null);
      continue;
    }

    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  while (result.at(-1) === null) result.pop();

  return result;
};
