import { ColorPicker as AntdColorPicker } from 'antd';
import type { ColorPickerProps as AntdColorPickerProps } from 'antd';

export type ColorPickerProps = AntdColorPickerProps;

export const ColorPicker = (props: ColorPickerProps) => {
  return <AntdColorPicker {...props} />;
};
