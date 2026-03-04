import { TreeSelect as AntdTreeSelect } from 'antd';
import type { TreeSelectProps as AntdTreeSelectProps } from 'antd';

export type TreeSelectProps = AntdTreeSelectProps;

export const TreeSelect = (props: TreeSelectProps) => {
  return <AntdTreeSelect {...props} />;
};
