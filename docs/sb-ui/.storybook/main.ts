import * as path from 'node:path'

import { StorybookConfig } from '@storybook/react-vite'
import { InlineConfig } from 'vite'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    'storybook-dark-mode',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false
  },
  async viteFinal(config: InlineConfig): Promise<InlineConfig> {
    const { mergeConfig } = await import('vite')
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@template/ui': path.resolve(__dirname, '../../../libs/ui/src'),
          '@/components': path.resolve(
            __dirname,
            '../../../libs/ui/src/components'
          )
        }
      },
      build: {
        rollupOptions: {
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            '@pandacss/dev',
            '@template/ui-panda/css',
            '@template/ui-panda/jsx',
            '@template/ui-panda/recipes',
            '@react-aria/button',
            '@react-aria/textfield',
            '@react-aria/utils',
            '@react-aria/label',
            '@headlessui/react'
          ]
        }
      }
    })
  }
}

export default config
