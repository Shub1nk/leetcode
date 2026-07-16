import { buildTree, treeToArray } from "../../lib";
import { insertIntoBST } from ".";

// Правильно вставляет значение в BST с учетом преобразований с LeetCode
describe("insertIntoBST", () => {
  it("должен вставить значение в правое поддерево", () => {
    expect(treeToArray(insertIntoBST(buildTree([4, 2, 7, 1, 3]), 5))).toEqual([4, 2, 7, 1, 3, 5]);
  });

  it("должен вставить значение, как левого ребёнка листа", () => {
    expect(treeToArray(insertIntoBST(buildTree([40, 20, 60, 10, 30, 50, 70]), 25))).toEqual([
      40,
      20,
      60,
      10,
      30,
      50,
      70,
      null,
      null,
      25,
    ]);
  });

  it("должен корректно работать с дырками (null) во входе", () => {
    expect(
      treeToArray(insertIntoBST(buildTree([4, 2, 7, 1, 3, null, null, null, null, null, null]), 5)),
    ).toEqual([4, 2, 7, 1, 3, 5]);
  });

  it("создаёт дерево из одного узла, если исходное пустое", () => {
    expect(treeToArray(insertIntoBST(buildTree([]), 5))).toEqual([5]);
  });
});
