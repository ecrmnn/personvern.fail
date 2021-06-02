module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/base',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  rules: {
    curly: [
      'error',
      'all',
    ],
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: false },
    ],
    'no-console': 'error',
    'no-ternary': 'error',
    'newline-before-return': 'error',
    'no-param-reassign': [
      2,
      { props: false },
    ],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      ignores: [],
    }],
  },
};
