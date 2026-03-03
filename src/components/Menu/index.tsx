import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from 'antd';

export type { MenuProps };

export const Menu = (props: MenuProps) => {
  return <AntdMenu {...props} />;
};
