import path from 'path'
import { fileURLToPath } from 'url'

import { includeIgnoreFile } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import tsLint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prittierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  includeIgnoreFile(gitignorePath),
  prittierRecommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    files: [
      '**/src/*.{j,t}s',
      '**/src/**/*.{j,t}s',
      '**/tests/*.{j,t}s',
      '**/tests/**/*.{j,t}s',
      '**/stories/*.{j,t}s',
      '**/stories/*.{j,t}s'
    ],
    plugins: {
      tslint: tsLint
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        extraFileExtensions: []
      }
    },
    ignores: [
      '.eslintrc.js',
      'dist',
      'node_modules',
      '*.json',
      '**/.coverage/',
      '**/*.d.ts'
    ],
    rules: {
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['error'] }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error'
    }
  }
]
