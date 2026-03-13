import { Typography } from "antd";
import type { ReactNode, CSSProperties } from "react";

const { Text: AntdText } = Typography;

export type TextType = "default" | "secondary" | "success" | "warning" | "danger";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface TextProps {
  children: ReactNode;
  type?: TextType;
  size?: TextSize;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  italic?: boolean;
  disabled?: boolean;
}

const SIZE_MAP: Record<TextSize, CSSProperties> = {
  xs: { fontSize: "0.75rem", lineHeight: "1rem" },
  sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
  md: { fontSize: "1rem", lineHeight: "1.5rem" },
  lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  xl: { fontSize: "1.25rem", lineHeight: "1.75rem" },
};

export const Text = ({
  children,
  type = "default",
  size = "md",
  strong,
  underline,
  delete: del,
  italic,
  disabled,
}: TextProps) => {
  const style = SIZE_MAP[size];

  return (
    <AntdText
      type={type === "default" ? undefined : type}
      strong={strong}
      underline={underline}
      delete={del}
      italic={italic}
      disabled={disabled}
      style={style}
    >
      {children}
    </AntdText>
  );
};
