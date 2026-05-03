import { notification } from "antd";
import type {
  ArgsProps,
  IconType,
  NotificationConfig,
} from "antd/es/notification/interface";
import { useCallback } from "react";

export type NotificationType = IconType;

export type { ArgsProps, NotificationConfig };

export type UseNotificationResult = {
  api: ReturnType<typeof notification.useNotification>[0];
  contextHolder: ReturnType<typeof notification.useNotification>[1];
  notify: (type: NotificationType, args: ArgsProps) => void;
};

export function useNotification(
  config?: NotificationConfig,
): UseNotificationResult {
  const [api, contextHolder] = notification.useNotification(config);

  const notify = useCallback(
    (type: NotificationType, args: ArgsProps) => {
      api[type](args);
    },
    [api],
  );

  return { api, contextHolder, notify };
}
