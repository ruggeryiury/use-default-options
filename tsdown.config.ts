import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  banner: "// For more information, please visit use-default-options's GitHub repository:\n// https://github.com/ruggeryiury/use-default-options\n",
  platform: 'neutral',
  fixedExtension: false,
  minify: true,
  external: ['type-fest'],
})
