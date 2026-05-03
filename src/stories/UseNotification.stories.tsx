import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Flex } from 'antd'
import { useNotify } from '../hooks/useNotify'
import {
  useNotification,
  type NotificationType,
} from '../hooks/useNotification'
import { NotificationProvider } from '../providers/NotificationProvider'

export function NotificationDemo() {
  const { contextHolder, notify } = useNotification()

  const openNotificationWithIcon = (type: NotificationType) => {
    notify(type, {
      title: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }

  return (
    <>
      {contextHolder}
      <Flex gap={8} wrap="wrap">
        <Button
          color="green"
          variant="outlined"
          onClick={() => openNotificationWithIcon('success')}
        >
          Success
        </Button>
        <Button
          color="blue"
          variant="outlined"
          onClick={() => openNotificationWithIcon('info')}
        >
          Info
        </Button>
        <Button
          color="yellow"
          variant="outlined"
          onClick={() => openNotificationWithIcon('warning')}
        >
          Warning
        </Button>
        <Button
          color="red"
          variant="outlined"
          onClick={() => openNotificationWithIcon('error')}
        >
          Error
        </Button>
      </Flex>
    </>
  )
}

/** Recommended for apps: one portal at the root, `notify` from any nested hook or component. */
function NotificationDemoWithProvider() {
  return (
    <NotificationProvider>
      <NotificationDemoInner />
    </NotificationProvider>
  )
}

function NotificationDemoInner() {
  const { notify } = useNotify()

  const openNotificationWithIcon = (type: NotificationType) => {
    notify(type, {
      title: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }

  return (
    <Flex gap={8} wrap="wrap">
      <Button
        color="green"
        variant="outlined"
        onClick={() => openNotificationWithIcon('success')}
      >
        Success
      </Button>
      <Button
        color="blue"
        variant="outlined"
        onClick={() => openNotificationWithIcon('info')}
      >
        Info
      </Button>
      <Button
        color="yellow"
        variant="outlined"
        onClick={() => openNotificationWithIcon('warning')}
      >
        Warning
      </Button>
      <Button
        color="red"
        variant="outlined"
        onClick={() => openNotificationWithIcon('error')}
      >
        Error
      </Button>
    </Flex>
  )
}

const meta = {
  title: 'Hooks/useNotification',
  component: NotificationDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Ant Design notifications: usa `NotificationProvider` + `useNotify` en la app (un solo portal). En un solo componente puedes usar `useNotification()` y renderizar `contextHolder` ahí mismo.',
      },
    },
  },
} satisfies Meta<typeof NotificationDemo>

export default meta
type Story = StoryObj<typeof NotificationDemo>

export const Demo: Story = {}

export const WithRootProvider: StoryObj<typeof NotificationDemoWithProvider> =
  {
    render: () => <NotificationDemoWithProvider />,
  }
