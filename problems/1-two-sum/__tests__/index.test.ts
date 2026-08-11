import { twoSum } from "..";
import { cases } from "./cases";

describe.each([["twoSum", twoSum]])("twoSum  · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    const { nums, target } = data;
    expect(solve(nums, target)).toEqual(expected);
  });
});
