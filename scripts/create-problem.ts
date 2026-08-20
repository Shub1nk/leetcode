import fs from "fs";
import path from "path";
import readline from "readline";

const askQuestion = (rl: readline.Interface, question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
};

// Задача принимается одной строкой в формате "100. Name of problem" —
// ровно как копируется с LeetCode. Разбираем номер и название сами.
const parseProblem = (raw: string): { number: string; name: string } | null => {
  const match = raw.trim().match(/^(\d+)\s*[.:)\-—]?\s*(.+)$/);
  const [, number, name] = match ?? [];
  if (!number || !name) {
    return null;
  }
  return { number, name: name.trim() };
};

const DEFAULT_APPROACH = "solution";

// Имя первого подхода задаётся флагом: --approach brute-force или
// --approach=brute-force. Вырезаем его из argv, остальное — название задачи.
const extractApproach = (argv: string[]): { approach: string; rest: string[] } => {
  const rest: string[] = [];
  let approach = "";

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index] ?? "";

    if (argument === "--approach") {
      approach = argv[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (argument.startsWith("--approach=")) {
      approach = argument.slice("--approach=".length);
      continue;
    }

    rest.push(argument);
  }

  return { approach: approach.trim() || DEFAULT_APPROACH, rest };
};

// Можно передать аргументом: create-problem "100. Two Sum".
// Если argv пуст — спрашиваем единственным prompt'ом (один вопрос =
// нет гонки readline на non-TTY, в отличие от нескольких подряд).
const resolveInput = async (argv: string[]): Promise<string> => {
  const fromArgs = argv.join(" ").trim();
  if (fromArgs) {
    return fromArgs;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const answer = await askQuestion(rl, "Задача (напр. 100. Two Sum): ");
  rl.close();
  return answer;
};

const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const toCamelCase = (str: string): string => {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
};

const main = async () => {
  const { approach, rest } = extractApproach(process.argv.slice(2));
  const parsed = parseProblem(await resolveInput(rest));
  if (!parsed) {
    console.log('Не разобрал ввод. Ожидаю формат "100. Name of problem"');
    process.exit(1);
  }

  const { number, name } = parsed;
  const functionName = toCamelCase(toKebabCase(name));
  const slug = toKebabCase(name);
  const approachSlug = toKebabCase(approach);
  const approachCamel = toCamelCase(approachSlug);
  const today = new Date().toISOString().slice(0, 10);
  const folderName = `${number}-${slug}`;
  const projectRoot = path.join(__dirname, "..");
  const destPath = path.join(projectRoot, "problems", folderName);
  const templatePath = path.join(projectRoot, "templates", "create-problem");

  if (fs.existsSync(destPath)) {
    console.log(`Папка ${folderName} уже существует`);
    process.exit(1);
  }

  fs.mkdirSync(destPath, { recursive: true });

  const readTemplate = (...segments: string[]) =>
    fs.readFileSync(path.join(templatePath, ...segments), "utf8");

  const readme = readTemplate("README.md");
  const indexTs = readTemplate("index.ts");
  const approachTs = readTemplate("approach.ts");
  const casesTs = readTemplate("__tests__", "cases.ts");
  const testTs = readTemplate("__tests__", "index.test.ts");
  const metaTs = readTemplate("meta.ts");

  const processTemplate = (content: string) => {
    return content
      .replace(/functionName/g, functionName)
      .replace(/Название/g, name)
      .replace(/__ID__/g, number)
      .replace(/__SLUG__/g, slug)
      .replace(/__DATE__/g, today)
      .replace(/__APPROACH_SLUG__/g, approachSlug)
      .replace(/__APPROACH_CAMEL__/g, approachCamel);
  };

  const testsPath = path.join(destPath, "__tests__");
  fs.mkdirSync(testsPath, { recursive: true });

  fs.writeFileSync(path.join(destPath, "README.md"), processTemplate(readme));
  fs.writeFileSync(path.join(destPath, "index.ts"), processTemplate(indexTs));
  fs.writeFileSync(path.join(destPath, `${approachSlug}.ts`), processTemplate(approachTs));
  fs.writeFileSync(path.join(testsPath, "cases.ts"), processTemplate(casesTs));
  fs.writeFileSync(path.join(testsPath, "index.test.ts"), processTemplate(testTs));
  fs.writeFileSync(path.join(destPath, "meta.ts"), processTemplate(metaTs));

  console.log(`Создано: problems/${folderName}/ (подход: ${approachSlug})`);
};

main();
