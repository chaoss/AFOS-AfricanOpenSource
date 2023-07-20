/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true, node: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', "allowImportExportEverywhere": true },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh', "prettier", "react", "jsx-a11y", "import"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
}
