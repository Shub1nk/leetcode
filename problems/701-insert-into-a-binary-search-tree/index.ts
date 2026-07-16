import { TreeNode } from "../../lib";

const LEFT = "left";
const RIGHT = "right";

export const insertIntoBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (root === null) {
    return new TreeNode(val);
  }

  const value = root.val;
  const direction = val < value ? LEFT : RIGHT;

  root[direction] = insertIntoBST(root[direction], val);

  return root;
};
