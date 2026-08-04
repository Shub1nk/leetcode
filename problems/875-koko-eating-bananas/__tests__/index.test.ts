import { minEatingSpeed } from "..";
import { cases } from "./cases";

describe.each([["beenary search", minEatingSpeed]])("minEatingSpeed  · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    const { piles, h } = data;
    expect(solve(piles, h)).toBe(expected);
  });
});
