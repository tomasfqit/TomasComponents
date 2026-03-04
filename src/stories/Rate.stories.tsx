import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rate } from '../components/Rate';

const meta: Meta<typeof Rate> = {
  title: 'Components/Rate',
  component: Rate,
  parameters: { layout: 'centered' },
  args: {
    defaultValue: 3,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Rate>;

export const Basic: Story = {};
