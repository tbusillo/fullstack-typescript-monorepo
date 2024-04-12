import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const recommended = eslint.configs.recommended.packageManager?.delete

export default tseslint.config(...recommended, ...tseslint.configs.recommendedTypeChecked, {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
