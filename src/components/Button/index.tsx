
import { Button as AntdButton } from 'antd';
import type { ReactNode } from 'react';

export interface ButtonProps {
  type?: "primary" | "link" | "text" | "dashed" | "default" | undefined;
  color?: "primary" | "default" | "danger" | "blue" | "purple" | "cyan" | "green" | "magenta" | "pink" | "red" | "orange" | "yellow" | "volcano" | "geekblue" | "lime" | "gold" | undefined;
  title: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "link" | "text" | "dashed" | "default" | undefined;
  onClick: () => void;
}

export const Button = ({ title, onClick, type = 'primary', color = 'primary' }: ButtonProps) => {
  return <AntdButton onClick={onClick} type={type} color={color} variant='solid'>{title}</AntdButton>
}