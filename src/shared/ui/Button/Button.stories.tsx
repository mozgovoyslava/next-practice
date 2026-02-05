import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
