import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
  // minify: true
  exports: true,
  publint: {
    level: 'error', // 'warning' | 'error' | 'suggestion'
  },
  attw: true,
})
