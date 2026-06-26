import type { ILinkedCities, TRoad } from "./models";

export function minimumScoreOfAPathBetweenTwoCities(n: number, roads: Array<TRoad>): number {
  const visited = new Set<number>();
  const stack: number[] = [];

  let minRoad = Infinity;

  const startNodeId = 1;

  // Строим неориентированный граф (список смежности): city -> соседи.
  // Каждое ребро добавляем в обе стороны — дороги двусторонние.
  const graph = new Map<number, ILinkedCities[]>();

  roads.forEach((road) => {
    const [cityA, cityB, distance] = road;

    const linkedACity = graph.get(cityA) ?? [];
    linkedACity.push({ city: cityB, distance });
    graph.set(cityA, linkedACity);

    const linkedBCity = graph.get(cityB) ?? [];
    linkedBCity.push({ city: cityA, distance });
    graph.set(cityB, linkedBCity);
  });

  // DFS на явном стеке: обходим компоненту, достижимую от города 1.
  stack.push(startNodeId);

  while (stack.length !== 0) {
    const currentNodeId = stack.pop() as number;

    // Ноду могли положить в стек несколько раз — обрабатываем только первый.
    if (visited.has(currentNodeId)) continue;
    visited.add(currentNodeId);

    const neighbors = graph.get(currentNodeId);

    neighbors?.forEach(({ city, distance }) => {
      // Минимум копим по КАЖДОМУ ребру, даже если сосед уже посещён.
      minRoad = Math.min(minRoad, distance);

      if (!visited.has(city)) {
        stack.push(city);
      }
    });
  }

  return minRoad;
}
