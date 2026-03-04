import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Group: Story = {
  render: () => (
    <Radio.Group defaultValue="a">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
    </Radio.Group>
  ),
};
