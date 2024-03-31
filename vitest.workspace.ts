import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/*/vitest.config.ts',
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
        '@/': new URL('./src/', import.meta.url).pathname
      }
    }
  }
])
