import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { TextArea } from '@template/ui/components/inputs/TextArea'
import type { TextAreaProps } from '@template/uicomponents/inputs/TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Design System/Inputs/TextArea',
  component: TextArea,
  args: {}
}

export default meta
type Story = StoryObj<typeof TextArea>
type StoryPlay = {
  args: TextAreaProps
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
