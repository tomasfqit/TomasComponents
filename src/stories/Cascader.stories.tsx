import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cascader } from '../components/Cascader';

const meta: Meta<typeof Cascader> = {
  title: 'Components/Cascader',
  component: Cascader,
  parameters: { layout: 'centered' },
  args: {
    style: { width: 260 },
    placeholder: 'Select location',
    options: [
      {
        value: 'ecuador',
        label: 'Ecuador',
        children: [
          { value: 'azuay', label: 'Azuay' },
          { value: 'pichincha', label: 'Pichincha' },
        ],
      },
      {
        value: 'colombia',
        label: 'Colombia',
        children: [
          { value: 'bogota', label: 'Bogota' },
          { value: 'medellin', label: 'Medellin' },
        ],
      },
    ],
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Cascader>;

export const Basic: Story = {};
