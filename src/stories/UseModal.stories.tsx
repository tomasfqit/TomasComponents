import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Flex, Typography } from 'antd'
import { useModal } from '../hooks/useModalResponsive'
import { ModalProvider } from '../providers/ModalProvider'

function ModalDemoInner() {
  const { openModal, closeModal } = useModal()

  const openExampleModal = () => {
    openModal({
      title: 'Modal oscuro de ejemplo',
      content: (
        <Flex vertical gap={8}>
          <Typography.Text>
            Este contenido se abre desde `useModal` y se renderiza con tema oscuro.
          </Typography.Text>
          <Typography.Text type="secondary">
            Puedes reutilizar este patrón en cualquier vista envuelta por `ModalProvider`.
          </Typography.Text>
        </Flex>
      ),
      showButtons: true,
      okText: 'Aceptar',
      cancelText: 'Cancelar',
      onOk: () => closeModal(),
      width: 640,
      height: 240,
      centered: true,
      closable: true,
    })
  }

  return (
    <Button type="primary" onClick={openExampleModal}>
      Abrir modal de ejemplo
    </Button>
  )
}

function ModalDemo() {
  return (
    <ModalProvider>
      <ModalDemoInner />
    </ModalProvider>
  )
}

const meta = {
  title: 'Hooks/useModal',
  component: ModalDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Ejemplo de uso de `useModal` con `ModalProvider` para abrir un modal global con tema oscuro.',
      },
    },
  },
} satisfies Meta<typeof ModalDemo>

export default meta
type Story = StoryObj<typeof ModalDemo>

export const Demo: Story = {}
