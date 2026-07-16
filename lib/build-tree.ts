import { TreeNode } from ".";

// По сути это поиск в BFS только мы не ищем, а собираем по уровням элементы в BST
export const buildTree = (arr: (number | null)[]): TreeNode | null => {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  const takeChild = (): TreeNode | null => {
    const value = arr[i++];
    if (value === null || value === undefined) return null;

    const child = new TreeNode(value);
    queue.push(child);
    return child;
  };

  while (i < arr.length) {
    const parent = queue.shift()!;
    parent.left = takeChild();
    parent.right = takeChild();
  }

  return root;
};
