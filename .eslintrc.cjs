module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts, .tsx, .d.ts']
    },
    'import/resolver': {
      // use a glob pattern
      typescript: {
        project: [
          'apps/*/tsconfig.json',
          'packages/*/tsconfig.json',
          'packages/*/tsconfig.node.json',
          'apps/**/tsconfig.node.json'
        ]
      }
    }
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'object-curly-newline': ['off'],
    'comma-dangle': ['off'],
    semi: ['off'],
    'import/extensions': ['off']
  },
  ignorePatterns: [
    '.husky',
    'node_modules',
    '**/package.json',
    'tsconfig.json',
    'tsconfig.node.json',
    '*.md',
    '**/*.css',
    '**/tsconfig.json',
    '**/tsconfig.*.json'
  ]
}
