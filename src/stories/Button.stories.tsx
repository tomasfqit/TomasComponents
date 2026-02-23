import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: {
    title: 'Click me',
    onClick: () => {},
  },
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: 'select',
      options: [
        'primary',
        'default',
        'danger',
        'blue',
        'purple',
        'cyan',
        'green',
        'magenta',
        'pink',
        'red',
        'orange',
        'yellow',
        'volcano',
        'geekblue',
        'lime',
        'gold',
      ],
    },
    type: {
      control: 'select',
      options: ['primary', 'link', 'text', 'dashed', 'default'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    title: 'Primary',
    color: 'primary',
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    title: 'Secondary',
    color: 'default',
    type: 'default',
  },
}

export const Danger: Story = {
  args: {
    title: 'Danger',
    color: 'danger',
    type: 'primary',
  },
}

export const Success: Story = {
  args: {
    title: 'Success',
    color: 'green',
    type: 'primary',
  },
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    color: 'yellow',
    type: 'primary',
  },
}

export const AllButtons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} title="Primary" color="primary" type="primary" />
      <Button {...args} title="Secondary" color="default" type="default" />
      <Button {...args} title="Danger" color="danger" type="primary" />
      <Button {...args} title="Success" color="green" type="primary" />
      <Button {...args} title="Warning" color="yellow" type="primary" />
      <Button {...args} title="Link" color="primary" type="link" />
      <Button {...args} title="Text" color="primary" type="text" />
      <Button {...args} title="Dashed" color="primary" type="dashed" />
    </div>
  ),
}