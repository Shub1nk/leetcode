export type TTupleCoord = [x: number, y: number];

export const manhattanDistance = (point1: TTupleCoord, point2: TTupleCoord) =>
  Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
