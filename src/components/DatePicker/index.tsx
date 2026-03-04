import { DatePicker as AntdDatePicker } from 'antd';
import type { DatePickerProps as AntdDatePickerProps } from 'antd';

export type DatePickerProps = AntdDatePickerProps;

export const DatePicker = (props: DatePickerProps) => {
  return <AntdDatePicker {...props} />;
};
