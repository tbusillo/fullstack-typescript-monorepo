import { defineWorkspace } from 'vitest/config'
import path from 'node:path'

export default defineWorkspace([
  'packages/*',
  {
    test: {
      include: ['packages/**/*.test.ts'],
      exclude: ['**/node_modules/**', '**/dist/**'],
      testTimeout: 10000,
      environment: 'node'
    },
    esbuild: { target: 'node20' },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
])
