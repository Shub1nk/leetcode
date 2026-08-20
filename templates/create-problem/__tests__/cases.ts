interface ICase {
  name: string;
  /** TODO: заменить на реальную форму входа задачи. */
  data: unknown;
  /** TODO: заменить на реальный тип ответа. */
  expected: unknown;
}

export const cases: ICase[] = [
  // TODO: заменить на «Пример 1» из условия и дальше по списку.
  { name: "заглушка", data: undefined, expected: undefined },
];
