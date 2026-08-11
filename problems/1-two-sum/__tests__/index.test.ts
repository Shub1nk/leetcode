import { twoSum } from "..";
import { cases } from "./cases";

describe.each([["hash-table", twoSum]])("twoSum  · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    const { nums, target } = data;
    expect(solve(nums, target)).toEqual(expected);
  });
});
