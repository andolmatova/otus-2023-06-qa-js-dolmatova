module.exports = {
  root: true,
  plugins: ['jest'],
  env: {
    browser: true, 
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:jest/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
