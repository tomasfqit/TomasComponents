import { createContext, useContext } from "react";
import type { UseNotificationResult } from "./useNotification";

export type NotifyContextValue = Pick<
  UseNotificationResult,
  "api" | "notify"
>;

export const NotifyContext = createContext<NotifyContextValue | null>(null);

/** Same notification API as {@link useNotification}, but bound to {@link NotificationProvider}'s mounted holder. */
export function useNotify(): NotifyContextValue {
  const ctx = useContext(NotifyContext);

  if (!ctx) {
    throw new Error(
      "useNotify must be used within NotificationProvider. " +
        "For a single component, call useNotification() once and render its contextHolder next to notify.",
    );
  }

  return ctx;
}
