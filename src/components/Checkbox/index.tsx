import { Checkbox as AntdCheckbox } from 'antd';
import type { CheckboxProps as AntdCheckboxProps } from 'antd';

export type CheckboxProps = AntdCheckboxProps;

export const Checkbox = (props: CheckboxProps) => {
  return <AntdCheckbox {...props} />;
};
