import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  banner: "// For more information, please visit set-default-options's GitHub repository:\n// https://github.com/ruggeryiury/set-default-options\n",
  fixedExtension: false,
})
