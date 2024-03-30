import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    sourcemap: process.env.NODE_ENV !== 'production',
    entry: ['src/index.ts'],
    target: ['chrome60', 'firefox60', 'safari11', 'edge18', 'node18', 'node20'],
    outDir: 'dist',
    format: ['cjs', 'esm'],
    treeshake: true,
    splitting: true,
    dts: true,
    // minify: !options.watch,
    clean: true,
    watch: options.watch,
    ignoreWatch: ['**/node_modules', '**/.git', '**/dist']
  }
})
