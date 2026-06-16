import { functionName } from ".";

describe("functionName", () => {
  test("пример 1", () => {
    const expected = 1;
    expect(functionName()).toBe(expected);
  });
});
