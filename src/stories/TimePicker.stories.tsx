import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from '../components/TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  parameters: { layout: 'centered' },
  args: {
    format: 'HH:mm',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Basic: Story = {};
