module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  // 用来自定义一些符合个人或者团队的规则
  rules: {},

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ]
}
