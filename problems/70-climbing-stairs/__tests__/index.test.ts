import { memo, tabulation } from "..";
import { cases } from "./cases";

describe.each([
  ["tabulation", tabulation],
  ["memo", memo],
])("climbingStairs · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(data)).toBe(expected);
  });
});
