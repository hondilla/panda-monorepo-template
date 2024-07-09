import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Text } from '@template/ui/components/inputs/Text'
import type { TextProps } from '@template/uicomponents/inputs/Text'

const meta: Meta<typeof Text> = {
  title: 'Design System/Inputs/Text',
  component: Text,
  args: {}
}

export default meta
type Story = StoryObj<typeof Text>
type StoryPlay = {
  args: TextProps
  canvasElement: HTMLElement
}

export const Primary: Story = {
  play: async ({ canvasElement }: StoryPlay) => {
    const { getByRole } = within(canvasElement)

    const input = getByRole('textbox')
    await expect(input).toHaveAttribute('type', 'text')

    await userEvent.type(input, 'Hello, world!')
    await expect(input).toHaveValue('Hello, world!')

    await userEvent.clear(input)
    await expect(input).toHaveValue('')
  }
}
