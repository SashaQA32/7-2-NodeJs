module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "prettier/prettier": ["error", { "endOfLine":"auto" }],
    "no-debugger": "off",
    "no-console":"off"
  }
}
