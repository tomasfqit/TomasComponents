import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: { layout: 'centered' },
  argTypes: {
    onFinish: { action: 'submitted' },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Form {...args} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item>
          <Button title="Submit" onClick={() => undefined} type="primary" />
        </Form.Item>
      </Form>
    </div>
  ),
};
