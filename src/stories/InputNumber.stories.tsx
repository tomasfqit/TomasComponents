import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputNumber } from '../components/InputNumber';

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  component: InputNumber,
  parameters: { layout: 'centered' },
  args: {
    min: 0,
    max: 100,
    defaultValue: 10,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Basic: Story = {};
