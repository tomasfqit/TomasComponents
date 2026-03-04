import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tab } from '../components/Tab';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: { layout: 'centered' },
  args: {
    defaultActiveKey: '1',
    items,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Basic: Story = {};
