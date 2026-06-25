# LeetCode Solutions

Collection of LeetCode problem solutions in TypeScript.

## Structure

```
leetcode/
├── problems/        # LeetCode problems
│   └── {number}-{name}/
│       ├── index.ts
│       ├── index.test.ts
│       └── README.md
├── shared/          # Reusable helpers
│   └── {name}/
│       ├── index.ts
│       ├── index.test.ts
│       └── README.md
└── templates/       # Templates
```

## Commands

```bash
npm install            # Install dependencies
npm test               # Run tests (verbose)
npm run format         # Format code (Biome)
npm run create-problem # Scaffold a new problem from the template
```

## Git hooks

Husky-хуки настраиваются автоматически при `npm install`:

- `pre-commit` — гоняет `npm test`, коммит не пройдёт при падающих тестах
- `commit-msg` — проверяет сообщение через commitlint (Conventional Commits)

## Commits

Conventional Commits format:

```bash
git commit -m "problem: add 9-palindrome-number"
git commit -m "shared: add math-reverse-integer"
git commit -m "docs: update algorithm-template"
```

Types: `problem`, `shared`, `docs`, `fix`, `refactor`, `chore`
