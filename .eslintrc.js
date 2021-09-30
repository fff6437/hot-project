module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.css'] }],
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/no-array-index-key': 0,
    'no-console': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': ['off', 'windows'], // lf格式
    'import/no-unresolved': [2, { ignore: ['antd-mobile', 'node_modules'] }], // 导入检查不到的模块
  },
};
