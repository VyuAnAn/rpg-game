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
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 15 , "consistent": true }],
    "no-unused-expressions": ["error", { "allowTaggedTemplates": true }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "no-bitwise": ["error", { "int32Hint": true }],
    "no-param-reassign": ["error", { "props": false }],
    "no-return-assign": "error",
    "max-len": ["error", { "code": 120 }],
    "class-methods-use-this": ["error", { "exceptMethods": ["getStateByValue"] }],
    "implicit-arrow-linebreak": "error",
    "prefer-object-spread": "error",
  },
};
