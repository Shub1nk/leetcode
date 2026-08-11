import { shipWithinDays } from "..";
import { cases } from "./cases";

describe.each([["binary search", shipWithinDays]])("shipWithinDays  · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    const { weights, days } = data;
    expect(solve(weights, days)).toBe(expected);
  });
});
