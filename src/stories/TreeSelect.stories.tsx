import type { Meta, StoryObj } from '@storybook/react-vite';
import { TreeSelect } from '../components/TreeSelect';

const meta: Meta<typeof TreeSelect> = {
  title: 'Components/TreeSelect',
  component: TreeSelect,
  parameters: { layout: 'centered' },
  args: {
    style: { width: 260 },
    placeholder: 'Select node',
    treeData: [
      {
        title: 'Parent',
        value: 'parent',
        children: [
          { title: 'Child 1', value: 'child-1' },
          { title: 'Child 2', value: 'child-2' },
        ],
      },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof TreeSelect>;

export const Basic: Story = {};
