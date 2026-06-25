import { minimumTimeToCompleteTrips } from ".";
import { bigTimes } from "./big-mock";

describe("minimumTimeToCompleteTrips", () => {
  it("Должен вернуть минимальное время для вычисления путешествия", () => {
    expect(minimumTimeToCompleteTrips([1, 2, 3], 5)).toEqual(3);
    expect(minimumTimeToCompleteTrips([2], 1)).toEqual(2);
  });
  it("Одинаковые времена у всех машин", () => {
    expect(minimumTimeToCompleteTrips([5, 5, 5], 3)).toEqual(5);
    expect(minimumTimeToCompleteTrips([5, 5, 5], 4)).toEqual(10);
  });
  it("Должен вернуть минимальное время для большого набора данных с бинарным поиском", () => {
    expect(minimumTimeToCompleteTrips(bigTimes, 9765277)).toEqual(34766088);
  });
});
