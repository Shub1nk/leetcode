import { memo, tabulation } from "..";
import { cases } from "./cases";

describe.each([
  ["memo", memo],
  ["tabulation", tabulation],
])("minCostClimbingStairs · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(data)).toBe(expected);
  });
});
