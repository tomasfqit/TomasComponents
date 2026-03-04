import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  args: {
    defaultChecked: true,
    checkedChildren: 'ON',
    unCheckedChildren: 'OFF',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {};
