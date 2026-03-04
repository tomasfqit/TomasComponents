import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  args: {
    children: 'Accept terms and conditions',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {};
