module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['problem', 'shared', 'docs', 'fix', 'refactor', 'chore'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never', ['sentence-case']],
    'header-max-length': [2, 'always', 72],
  },
};
