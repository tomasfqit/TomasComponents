import type { Meta, StoryObj } from '@storybook/react-vite';
import { Upload } from '../components/Upload';
import { Button } from '../components/Button';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  parameters: { layout: 'centered' },
  args: {
    beforeUpload: () => false,
    multiple: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Basic: Story = {
  render: (args) => (
    <Upload {...args}>
      <Button title="Select file" onClick={() => undefined} />
    </Upload>
  ),
};
