module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'no-param-reassign': ['error', { 'props': false }],
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    /** Disable Reacts prop-types in favour of TS Types */
    'react/prop-types': 0,
    /** Disable in favour of ES6 default params */
    'react/require-default-props': 0,
    'react/function-component-definition': [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "function-expression"
    }],
    /** Allow unused vars when prefixed with an underscore */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }
    ],
    /** Allow 'export { default } from './file' */
    'no-restricted-exports': 'off',
  },
};
