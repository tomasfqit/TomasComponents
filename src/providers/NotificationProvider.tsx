import type { NotificationConfig } from "antd/es/notification/interface";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useNotification } from "../hooks/useNotification";
import { NotifyContext } from "../hooks/useNotify";

export interface NotificationProviderProps {
  children: ReactNode;
  /** Passed to Ant Design `notification.useNotification(config)`. */
  notificationConfig?: NotificationConfig;
}

/**
 * Mounts the notification portal once at the app root. Use {@link useNotify} anywhere below this provider.
 */
export function NotificationProvider({
  children,
  notificationConfig,
}: NotificationProviderProps) {
  const { api, notify, contextHolder } = useNotification(notificationConfig);

  const value = useMemo(() => ({ api, notify }), [api, notify]);

  return (
    <NotifyContext.Provider value={value}>
      {children}
      {contextHolder}
    </NotifyContext.Provider>
  );
}
