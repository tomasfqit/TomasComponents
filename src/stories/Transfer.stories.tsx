import type { Meta, StoryObj } from '@storybook/react-vite';
import { Transfer } from '../components/Transfer';

const dataSource = Array.from({ length: 8 }).map((_, index) => ({
  key: String(index + 1),
  title: `Item ${index + 1}`,
  description: `Description ${index + 1}`,
}));

const meta: Meta<typeof Transfer> = {
  title: 'Components/Transfer',
  component: Transfer,
  parameters: { layout: 'centered' },
  args: {
    dataSource,
    targetKeys: ['2', '4'],
    render: (item) => item.title as string,
    titles: ['Source', 'Target'],
    listStyle: { width: 200, height: 240 },
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Transfer>;

export const Basic: Story = {};
