import type { TreeNode } from "../../lib";

/** Проверяе переданная нода является листом или нет */
export const isLeafNode = (node: TreeNode) => node.left === null && node.right === null;
