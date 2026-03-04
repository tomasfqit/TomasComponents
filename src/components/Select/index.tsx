import { Select as AntdSelect } from 'antd';
import type { SelectProps as AntdSelectProps } from 'antd';

export type SelectProps = AntdSelectProps;

export const Select = (props: SelectProps) => {
  return <AntdSelect {...props} />;
};
