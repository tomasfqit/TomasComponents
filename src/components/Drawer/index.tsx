import { Drawer as AntdDrawer } from "antd";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export interface DrawerProps {
  title: string;
  closable: boolean;
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  footer: ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  size?: number | string;
  mobileSize?: number | string;
  mobileBreakpoint?: number;
}

export const Drawer = ({
  title,
  closable,
  onClose,
  open,
  children,
  footer,
  placement = "left",
  size,
  mobileSize,
  mobileBreakpoint = 450,
}: DrawerProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [mobileBreakpoint]);

  const defaultSize =
    placement === "top" || placement === "bottom" ? 260 : 300;
  const resolvedSize = isMobile
    ? mobileSize ?? (placement === "top" || placement === "bottom" ? "100vh" : "100vw")
    : size ?? defaultSize;
  const dimensionProp =
    placement === "top" || placement === "bottom"
      ? { height: resolvedSize }
      : { size: resolvedSize as never };

  return (
    <AntdDrawer
      key={placement}
      title={title}
      placement={placement}
      closable={closable}
      onClose={onClose}
      open={open}
      footer={footer}
      {...dimensionProp}
    >
      {children}
    </AntdDrawer>
  );
};
