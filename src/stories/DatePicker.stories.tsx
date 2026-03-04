import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from '../components/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: { layout: 'centered' },
  args: {
    placeholder: 'Select date',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {};
