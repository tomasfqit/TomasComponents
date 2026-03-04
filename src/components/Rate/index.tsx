import { Rate as AntdRate } from 'antd';
import type { RateProps as AntdRateProps } from 'antd';

export type RateProps = AntdRateProps;

export const Rate = (props: RateProps) => {
  return <AntdRate {...props} />;
};
