import * as path from 'node:path'

import { StorybookConfig } from '@storybook/react-vite'
import { InlineConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
          '@/ui': path.resolve(__dirname, '../../../libs/ui/src'),
          '@/panda': path.resolve(__dirname, '../styled-system')
        }
      }
    })
  }
}

export default config
