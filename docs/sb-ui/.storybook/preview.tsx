import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import './styles.css'

const preview: Preview = {
  parameters: {
    tags: ['autodocs'],
    backgrounds: { disable: true },
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      current: 'light',
      dark: { ...themes.dark },
      light: { ...themes.light }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
