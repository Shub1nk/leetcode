import { monotonicStack } from "..";
import { cases } from "./cases";

describe.each([["monotonic-stack", monotonicStack]])("dailyTemperatures · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(data)).toEqual(expected);
  });
});
