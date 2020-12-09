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
      "parser": "babel-eslint"
  },
  rules: {} // 用来自定义一些符合个人或者团队的规则
}