import { kruskal, prim } from "..";
import { cases } from "./cases";

describe.each([
  ["kruskal", kruskal],
  ["prim", prim],
])("minCostToConnectAllPoints · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(data)).toBe(expected);
  });
});
