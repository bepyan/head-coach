/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  arrowParens: 'always',
  bracketSpacing: true,

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
