import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import jsdoc from 'eslint-plugin-jsdoc'

export default defineConfig(
  {
    ignores: ['dist/**'],
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      jsdoc: jsdoc,
    },
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeCheckedOnly,
  { rules: { 'no-unused-vars': 'off' } }
)
