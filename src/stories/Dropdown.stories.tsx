import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import { Dropdown } from '../components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  args: {
    menu: {
      items: [
        { key: '1', label: 'First option' },
        { key: '2', label: 'Second option' },
        { key: '3', label: 'Third option' },
      ],
    },
    children: <Button title="Open dropdown" onClick={() => {}} type="default" />,
  },
};
