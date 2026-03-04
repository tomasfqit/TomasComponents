import { Collapse as AntdCollapse } from 'antd';
import type { CollapseProps as AntdCollapseProps } from 'antd';

export type CollapseProps = AntdCollapseProps;

export const Collapse = (props: CollapseProps) => {
  return <AntdCollapse {...props} />;
};
