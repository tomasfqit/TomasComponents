import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapse } from '../components/Collapse';
import type { CollapseProps } from '../components/Collapse';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Panel 1',
    children: 'Content of panel 1',
  },
  {
    key: '2',
    label: 'Panel 2',
    children: 'Content of panel 2',
  },
  {
    key: '3',
    label: 'Panel 3',
    children: 'Content of panel 3',
  },
];

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: { layout: 'centered' },
  args: {
    style: { width: 420 },
    defaultActiveKey: ['1'],
    items,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Basic: Story = {};
