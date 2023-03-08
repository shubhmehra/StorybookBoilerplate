const OFF = 0;
const WARNING = 1;

module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': [OFF],
    'react/jsx-filename-extension': [WARNING, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [OFF],
    'react/jsx-props-no-spreading': [OFF],
    'max-len': [
      WARNING,
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/prefer-default-export': [OFF],
    'import/export': [OFF],
    'prettier/prettier': [OFF],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: 'webpack',
    },
  },
};
