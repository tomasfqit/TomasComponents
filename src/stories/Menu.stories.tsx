import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from '../components/Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  args: {
    mode: 'vertical',
    style: { width: 220 },
    items: [
      { key: 'home', label: 'Home' },
      { key: 'profile', label: 'Profile' },
      { key: 'settings', label: 'Settings' },
    ],
  },
};
