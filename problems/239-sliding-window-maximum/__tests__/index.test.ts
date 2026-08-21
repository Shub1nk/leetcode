import { bruteForce, monotonicDeque } from "..";
import { cases } from "./cases";

describe.each([
  ["bruteForce", bruteForce],
  ["monotonicDeque", monotonicDeque],
])("slidingWindowMaximum · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(data.nums, data.k)).toEqual(expected);
  });
});
