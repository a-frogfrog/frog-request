import { defineConfig } from 'tsdown'
import { alias } from './ailas.config'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
  // minify: true
  exports: true,
  publint: {
    level: 'error', // 'warning' | 'error' | 'suggestion'
  },
  attw: true,
  inputOptions: {
    resolve: {
      alias,
    },
  },
})
