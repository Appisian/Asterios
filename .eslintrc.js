const resolve = require('path').resolve

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'settings': {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              '@': __dirname,
            }
          }
        }
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info', 'log'],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-param-reassign':'off',
    'new-cap':'warn',
    'global-require':'warn',
    'arrow-parens': ["error", 'as-needed'],
  },
  globals: {}
}
