import { buildTree } from "../../../lib";

import { bfs, dfs } from "..";
import { cases } from "./cases";

describe.each([
  ["bfs", bfs],
  ["dfs", dfs],
])("minimumDepthOfBinaryTree · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(buildTree(data))).toBe(expected);
  });
});
