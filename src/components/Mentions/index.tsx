import { Mentions as AntdMentions } from 'antd';
import type { MentionsProps as AntdMentionsProps } from 'antd';

export type MentionsProps = AntdMentionsProps;

export const Mentions = (props: MentionsProps) => {
  return <AntdMentions {...props} />;
};
