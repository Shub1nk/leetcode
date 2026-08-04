export type TTupleCoord = [x: number, y: number];

// TODO: ставлю пока пометку, возможно еще где-нибудь понадобится и уйдет в shared
export const manhattanDistance = (point1: TTupleCoord, point2: TTupleCoord) =>
  Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
