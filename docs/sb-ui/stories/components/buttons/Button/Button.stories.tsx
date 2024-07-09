import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import {
  Button,
  type ButtonProps
} from '@template/ui/components/buttons/Button'

const meta: Meta<typeof Button> = {
  title: 'Design System/Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
    onPress: fn()
  }
}
export default meta

type Story = StoryObj<typeof Button>
type StoryPlay = {
  args: ButtonProps
  canvasElement: HTMLElement
}

export const Base: Story = {
  play: async ({ args, canvasElement }: StoryPlay) => {
    const canvas = within(canvasElement)

    const buttonElement = canvas.getByRole('button')
    await userEvent.click(buttonElement)

    await expect(args.onPress).toHaveBeenCalled()
  }
}
