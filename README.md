# Решения LeetCode

Разборы задач LeetCode на TypeScript: решение, тесты и краткий разбор для каждой задачи.

Одна задача может быть решена несколькими способами — тогда каждый подход лежит отдельным файлом и прогоняется по общему набору тестов.

## Структура

```
leetcode/
├── problems/            # задачи
│   ├── index.json       # сводный индекс тегов (собирается yarn build-meta)
│   └── {номер}-{имя}/
│       ├── __tests__/
│       │   ├── cases.ts       # входные данные и ожидания
│       │   └── index.test.ts  # describe.each по всем подходам
│       ├── {подход}.ts        # по файлу на подход
│       ├── index.ts           # реэкспорт подходов под их именами
│       ├── meta.ts            # теги: приёмы, структуры данных, что взято из shared
│       └── README.md          # условие, разбор, сложность
├── shared/              # переиспользуемые структуры и хелперы
│   └── {имя}/
│       ├── __tests__/
│       ├── index.ts
│       └── README.md
├── lib/                 # хелперы для тестов (TreeNode, buildTree)
├── docs/                # заметки, см. ниже
├── scripts/             # create-problem, build-meta-index
└── templates/           # шаблон новой задачи
```

## Команды

```bash
npm install            # установить зависимости
npm test               # прогнать тесты
npm run format         # форматирование (Biome)
npm run create-problem # создать папку задачи по шаблону
npm run build-meta     # пересобрать problems/index.json из всех meta.ts
```

Скаффолду можно сразу передать имя первого подхода:

```bash
npm run create-problem "239. Sliding Window Maximum" --approach brute-force
```

Получится `brute-force.ts` с заготовкой решения, `index.ts` с реэкспортом, `__tests__/cases.ts` и тест, уже развёрнутый через `describe.each`.

## Документы

- [`docs/leetcode-snippets.md`](docs/leetcode-snippets.md) — минимальные версии структур из `shared/`, без импортов, для отправки решения на LeetCode

## Git-хуки

Husky-хуки настраиваются автоматически при `npm install`:

- `pre-commit` — гоняет `npm test`, коммит не пройдёт при падающих тестах
- `commit-msg` — проверяет сообщение через commitlint (Conventional Commits)

## Коммиты

Формат — Conventional Commits:

```bash
git commit -m "problem: add 9-palindrome-number"
git commit -m "shared: add math-reverse-integer"
git commit -m "docs: update algorithm-template"
```

Типы: `problem`, `shared`, `docs`, `fix`, `refactor`, `chore`
