import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mentions } from '../components/Mentions';

const meta: Meta<typeof Mentions> = {
  title: 'Components/Mentions',
  component: Mentions,
  parameters: { layout: 'centered' },
  args: {
    style: { width: 320 },
    rows: 4,
    placeholder: 'Type @ to mention',
    options: [
      { value: 'alice', label: 'alice' },
      { value: 'bob', label: 'bob' },
      { value: 'charlie', label: 'charlie' },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Mentions>;

export const Basic: Story = {};
