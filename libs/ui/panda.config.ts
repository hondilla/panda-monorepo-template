import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@template/ui-preset'],
  include: [
    '../ui-preset/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  exclude: [],
  importMap: '@template/ui-panda',
  jsxFramework: 'react',
  jsxFactory: 'panda',
  outExtension: 'js'
})
