import type { Meta, StoryObj } from '@storybook/react'

import { ButtonBase } from '@/ui/components/buttons/ButtonBase/ButtonBase'

const meta: Meta<typeof ButtonBase> = {
  title: 'Design System/Buttons',
  component: ButtonBase
}

export default meta
type Story = StoryObj<typeof ButtonBase>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}
