import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@template/ui-preset'],
  include: [
    '../../libs/ui-preset/src/**/*.{js,jsx,ts,tsx}',
    '../../libs/ui/src/**/*.{js,jsx,ts,tsx}'
  ],
  exclude: [],
  importMap: '@/panda',
  jsxFramework: 'react',
  jsxFactory: 'panda'
})
