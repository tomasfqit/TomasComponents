import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonIcon } from '../components/ButtonIcon';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: { layout: 'centered' },
  args: {
    icon: <SearchOutlined />,
    ariaLabel: 'Search',
    type: 'primary',
    color: 'primary',
    variant: 'solid',
    shape: 'circle',
    size: 'middle',
    onClick: () => {},
  },
  argTypes: {
    icon: { control: false },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Playground: Story = {};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <ButtonIcon {...args} icon={<SearchOutlined />} shape="circle" ariaLabel="Search" />
      <ButtonIcon {...args} icon={<EditOutlined />} shape="default" ariaLabel="Edit" />
      <ButtonIcon {...args} icon={<DeleteOutlined />} shape="round" ariaLabel="Delete" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <ButtonIcon {...args} icon={<SearchOutlined />} variant="solid" ariaLabel="Solid" />
      <ButtonIcon {...args} icon={<EditOutlined />} variant="outlined" ariaLabel="Outlined" />
      <ButtonIcon {...args} icon={<DeleteOutlined />} variant="dashed" ariaLabel="Dashed" />
      <ButtonIcon {...args} icon={<PlusOutlined />} variant="text" ariaLabel="Text" />
    </div>
  ),
};
