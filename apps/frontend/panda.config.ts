import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@template/ui-preset'],
  include: [
    '../../libs/ui-preset/dist/**/*.{js,jsx,ts,tsx}',
    '../../libs/ui/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  exclude: [],
  importMap: '@template/ui-panda',
  jsxFramework: 'react',
  jsxFactory: 'panda'
})
