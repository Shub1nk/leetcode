import { __APPROACH_CAMEL__ } from "..";
import { cases } from "./cases";

// Каждый новый подход добавляется строкой в describe.each — кейсы общие.
describe.each([["__APPROACH_SLUG__", __APPROACH_CAMEL__]])("functionName · %s", (_name, solve) => {
  it.each(cases)("$name", ({ data, expected }) => {
    expect(solve(data)).toBe(expected);
  });
});
