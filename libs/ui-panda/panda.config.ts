import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@template/ui-preset'],
  exclude: [],
  importMap: '@/panda',
  jsxFramework: 'react',
  jsxFactory: 'panda',
  outdir: 'styled-system',
  outExtension: 'js'
})
