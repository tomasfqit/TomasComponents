import { Switch as AntdSwitch } from 'antd';
import type { SwitchProps as AntdSwitchProps } from 'antd';

export type SwitchProps = AntdSwitchProps;

export const Switch = (props: SwitchProps) => {
  return <AntdSwitch {...props} />;
};
