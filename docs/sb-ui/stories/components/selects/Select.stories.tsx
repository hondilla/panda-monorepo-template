import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectOptionProps,
  SelectProps
} from '@template/ui/components/selects/Select'

const items = [
  {
    value: 'Option 1',
    label: 'Option 1'
  },
  {
    value: 'Option 2',
    label: 'Option 2'
  }
]

const meta: Meta<typeof Select> = {
  title: 'Design System/Selects/Select',
  component: Select,
  args: {
    label: 'Select',
    children: (
      props: (arg0: SelectOptionProps) => JSX.Element
    ): JSX.Element[] =>
      items.map((item: SelectOptionProps): JSX.Element => {
        return props(item)
      })
  } as unknown as SelectProps
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {}
