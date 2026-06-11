import { functionName } from './index';

describe('Название задачи', () => {
  test('пример 1', () => {
    const expected = 1;
    expect(functionName()).toBe(expected);
  });
});
