import { Slider as AntdSlider } from 'antd';
import type { SliderSingleProps as AntdSliderProps } from 'antd';

export type SliderProps = AntdSliderProps;

export const Slider = (props: SliderProps) => {
  return <AntdSlider {...props} />;
};
