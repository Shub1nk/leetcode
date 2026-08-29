import { memo, tabulation } from "..";
import { cases } from "./cases";

describe.each([
  ["tabulation", tabulation],
  ["memo", memo],
])("coinChange · %s", (name, solve) => {
  it.each(cases.filter((c) => !c.skipFor?.includes(name)))("$name", ({ data, expected }) => {
    expect(solve(data.coins, data.amount)).toBe(expected);
  });
});
