import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '../components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: { layout: 'centered' },
  args: {
    style: { width: 280 },
    defaultValue: 30,
    min: 0,
    max: 100,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {};
