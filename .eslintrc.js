module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-continue": "off",
    "no-loop-func": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "class-methods-use-this": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
};
