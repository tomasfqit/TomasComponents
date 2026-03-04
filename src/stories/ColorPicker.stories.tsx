import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorPicker } from '../components/ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: { layout: 'centered' },
  args: {
    defaultValue: '#1677ff',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Basic: Story = {};
