import { Tabs as AntdTabs } from 'antd';
import type { TabsProps } from 'antd';

export type TabProps = TabsProps;

export const Tab = (props: TabProps) => {
  return <AntdTabs {...props} />;
};
