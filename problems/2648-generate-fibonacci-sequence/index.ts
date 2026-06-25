export function* generateFibonacciSequence(): Generator<number, void, number> {
  let a = 0;
  let b = 1;
  while (true) {
    // выдаём текущее значение
    yield a;
    // вычисляем следующее и сдвигаем «окно»
    const next = a + b;
    a = b;
    b = next;
  }
}
