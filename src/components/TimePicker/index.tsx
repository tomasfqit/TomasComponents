import { TimePicker as AntdTimePicker } from 'antd';
import type { TimePickerProps as AntdTimePickerProps } from 'antd';

export type TimePickerProps = AntdTimePickerProps;

export const TimePicker = (props: TimePickerProps) => {
  return <AntdTimePicker {...props} />;
};
