# LeetCode Solutions

Collection of LeetCode problem solutions in TypeScript.

## Progress

[Google Sheets](https://docs.google.com/spreadsheets/d/1DWpRcfu5fGGV8hOHXEo8lXdsN4xVxFdjfmLlYzimP2U/edit?gid=1529208291#gid=1529208291) - tracking solved problems

## Structure

```
leetcode/
├── problems/        # LeetCode problems
│   └── {number}-{name}/
│       ├── index.ts
│       ├── index.test.ts
│       └── README.md
├── shared/          # Reusable helpers
│   └── {category}-{name}/
│       ├── index.ts
│       ├── index.test.ts
│       └── README.md
└── templates/       # Templates
```

## Commands

```bash
npm install   # Install dependencies
npm test      # Run tests (verbose)
npm run format  # Format code (Biome)
```

## Problems

| # | Title | Difficulty | Status |
|---|-------|------------|--------|
| 9 | Palindrome Number | Easy | ✅ |

## Commits

Conventional Commits format:

```bash
git commit -m "problem: add 9-palindrome-number"
git commit -m "shared: add math-reverse-integer"
git commit -m "docs: update algorithm-template"
```

Types: `problem`, `shared`, `docs`, `fix`, `refactor`, `chore`
