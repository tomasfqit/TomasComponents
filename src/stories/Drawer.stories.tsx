import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Drawer } from '../components/Drawer';
import { Button } from '../components/Button';

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
  args: {
    title: "Drawer title",
    placement: "left",
    closable: true,
    open: false,
    footer: null,
    children: "Drawer content goes here. Add your own elements via controls.",
  },
  argTypes: {
    onClose: { action: "closed" },
    placement: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    footer: { control: false },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open ?? false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    const handleOpen = () => setOpen(true);

    const footer = args.footer ?? (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <Button title="Cancel" onClick={handleClose} type="default" />
        <Button title="Submit" onClick={handleClose} type="primary" />
      </div>
    );

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button title="Open drawer" onClick={handleOpen} />
        <Drawer
          {...args}
          open={open}
          onClose={handleClose}
          footer={footer}
        >
          {args.children}
        </Drawer>
      </div>
    );
  },
};
