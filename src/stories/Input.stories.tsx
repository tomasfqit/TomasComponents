import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  args: {
    placeholder: 'Type something',
    style: { width: 260 },
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {};
