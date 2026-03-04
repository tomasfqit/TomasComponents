import { Transfer as AntdTransfer } from 'antd';
import type { TransferProps as AntdTransferProps } from 'antd';

export type TransferProps = AntdTransferProps;

export const Transfer = (props: TransferProps) => {
  return <AntdTransfer {...props} />;
};
