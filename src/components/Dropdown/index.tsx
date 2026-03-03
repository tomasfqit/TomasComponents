import { Dropdown as AntdDropdown } from 'antd';
import type { DropdownProps as AntdDropdownProps } from 'antd';
import type { ReactNode } from 'react';

export interface DropdownProps extends Omit<AntdDropdownProps, 'children'> {
  children: ReactNode;
}

export const Dropdown = ({ children, ...props }: DropdownProps) => {
  return <AntdDropdown {...props}>{children}</AntdDropdown>;
};
