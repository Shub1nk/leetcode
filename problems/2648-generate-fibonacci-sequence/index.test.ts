import { generateFibonacciSequence } from ".";

describe("generateFibonacciSequence", () => {
  it("должен вернуть числа фибонначи", () => {
    const generator = generateFibonacciSequence();

    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
    expect(generator.next().value).toBe(5);
    expect(generator.next().value).toBe(8);
  });
});
