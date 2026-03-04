import { InputNumber as AntdInputNumber } from 'antd';
import type { InputNumberProps as AntdInputNumberProps } from 'antd';

export type InputNumberProps = AntdInputNumberProps;

export const InputNumber = (props: InputNumberProps) => {
  return <AntdInputNumber {...props} />;
};
