import { Button as AntdButton } from "antd";
import type { ReactNode } from "react";
import type { ButtonColor, ButtonType, ButtonVariant } from "../Button";

export interface ButtonIconProps {
  icon: ReactNode;
  onClick: () => void;
  type?: ButtonType;
  color?: ButtonColor;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round";
  size?: "small" | "middle" | "large";
  ariaLabel?: string;
}

export const ButtonIcon = ({
  icon,
  onClick,
  type = "primary",
  color = "primary",
  variant = "solid",
  disabled = false,
  loading = false,
  shape = "circle",
  size = "middle",
  ariaLabel = "icon button",
}: ButtonIconProps) => {
  return (
    <AntdButton
      onClick={onClick}
      type={type}
      color={color}
      variant={variant}
      disabled={disabled}
      loading={loading}
      shape={shape}
      size={size}
      icon={icon}
      aria-label={ariaLabel}
    />
  );
};
