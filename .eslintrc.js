module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 10 }],
    "no-unused-expressions": ["error", { "allowTaggedTemplates": true }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "arrow-body-style": ["error", "as-needed"]
  },
};
