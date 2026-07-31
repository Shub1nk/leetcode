const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  verbose: true,
  // Только *.test.* / *.spec.* — иначе дефолтный паттерн `__tests__/**/*`
  // подхватывает вспомогательные файлы (напр. cases.ts) как пустые сьюты.
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/templates/", "/node_modules/"],
};
