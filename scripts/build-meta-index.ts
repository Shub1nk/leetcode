import fs from "fs";
import path from "path";
import type { ProblemMeta } from "./meta/types";

const projectRoot = path.join(__dirname, "..");
const problemsDir = path.join(projectRoot, "problems");

const metaFiles = fs
  .readdirSync(problemsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(problemsDir, entry.name, "meta.ts"))
  .filter((file) => fs.existsSync(file));

const problems: ProblemMeta[] = metaFiles
  .map((file) => require(file).meta as ProblemMeta)
  .sort((a, b) => a.id - b.id);

const outPath = path.join(problemsDir, "index.json");
fs.writeFileSync(outPath, `${JSON.stringify(problems, null, 2)}\n`);

console.log(`Собрано задач: ${problems.length} → problems/index.json`);
