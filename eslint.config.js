import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
