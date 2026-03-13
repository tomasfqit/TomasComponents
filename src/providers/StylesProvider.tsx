import type { ReactNode } from "react";
import "antd/dist/reset.css";
import "../styles.css";

export interface StylesProviderProps {
  children: ReactNode;
}

/**
 * Wrap your host app with this provider to ensure
 * TomasComponents styles and Ant Design resets are loaded.
 */
export const StylesProvider = ({ children }: StylesProviderProps) => {
  return <>{children}</>;
};
