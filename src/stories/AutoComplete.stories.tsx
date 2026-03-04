import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoComplete } from '../components/AutoComplete';

const meta: Meta<typeof AutoComplete> = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  parameters: { layout: 'centered' },
  args: {
    style: { width: 240 },
    placeholder: 'Type to search',
    options: [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
    onSelect: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Basic: Story = {};
