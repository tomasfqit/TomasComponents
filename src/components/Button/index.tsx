
import { Button as AntdButton } from 'antd';
import type { ReactNode } from 'react';

export type ButtonType = "primary" | "link" | "text" | "dashed" | "default" | undefined;
export type ButtonColor =
  | "primary"
  | "default"
  | "danger"
  | "blue"
  | "purple"
  | "cyan"
  | "green"
  | "magenta"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "volcano"
  | "geekblue"
  | "lime"
  | "gold"
  | undefined;
export type ButtonVariant = "solid" | "outlined" | "filled" | "link" | "text" | "dashed" | undefined;

export interface ButtonProps {
  type?: ButtonType;
  color?: ButtonColor;
  title: ReactNode;
  variant?: ButtonVariant;
  onClick: () => void;
}

export const Button = ({ title, onClick, type = 'primary', color = 'primary', variant = 'solid' }: ButtonProps) => {
  return <AntdButton onClick={onClick} type={type} color={color} variant={variant}>{title}</AntdButton>
}