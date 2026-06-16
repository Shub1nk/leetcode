import fs from "fs";
import path from "path";
import readline from "readline";

const askQuestion = (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
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
  const number = await askQuestion("Номер задачи: ");
  const name = await askQuestion("Название (например two-sum): ");
  const functionName = toCamelCase(toKebabCase(name));

  if (!number || !name) {
    console.log("Нужно указать номер и название");
    process.exit(1);
  }

  const folderName = `${number}-${toKebabCase(name)}`;
  const projectRoot = path.join(__dirname, "..");
  const destPath = path.join(projectRoot, "problems", folderName);
  const templatePath = path.join(projectRoot, "templates", "create-problem");

  if (fs.existsSync(destPath)) {
    console.log(`Папка ${folderName} уже существует`);
    process.exit(1);
  }

  fs.mkdirSync(destPath, { recursive: true });

  const readme = fs.readFileSync(path.join(templatePath, "README.md"), "utf8");
  const indexTs = fs.readFileSync(path.join(templatePath, "index.ts"), "utf8");
  const testTs = fs.readFileSync(path.join(templatePath, "index.test.ts"), "utf8");

  const processTemplate = (content: string) => {
    return content.replace(/functionName/g, functionName).replace(/Название/g, name);
  };

  fs.writeFileSync(path.join(destPath, "README.md"), processTemplate(readme));
  fs.writeFileSync(path.join(destPath, "index.ts"), processTemplate(indexTs));
  fs.writeFileSync(path.join(destPath, "index.test.ts"), processTemplate(testTs));

  console.log(`Создано: problems/${folderName}/`);
};

main();
