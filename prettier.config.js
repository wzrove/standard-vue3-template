module.exports = {
  printWidth: 100,
  semi: true,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  plugins: [import('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
};
