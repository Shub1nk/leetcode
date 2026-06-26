import { minimumScoreOfAPathBetweenTwoCities } from ".";
import { roads } from "./bif-mock";

describe("minimumScoreOfAPathBetweenTwoCities", () => {
  it("должен вернуть минимальный маршрут между 2 любыми городами", () => {
    expect(
      minimumScoreOfAPathBetweenTwoCities(4, [
        [1, 2, 9],
        [2, 3, 6],
        [2, 4, 5],
        [1, 4, 7],
      ]),
    ).toEqual(5);
    expect(
      minimumScoreOfAPathBetweenTwoCities(4, [
        [1, 2, 2],
        [1, 3, 4],
        [3, 4, 7],
      ]),
    ).toEqual(2);
  });
  it("должен вернуть минимальный маршрут между 2 любыми городами, с большим набором данных", () => {
    expect(minimumScoreOfAPathBetweenTwoCities(36, roads)).toEqual(418);
  });
});
