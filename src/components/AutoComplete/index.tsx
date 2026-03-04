import { AutoComplete as AntdAutoComplete } from 'antd';
import type { AutoCompleteProps as AntdAutoCompleteProps } from 'antd';

export type AutoCompleteProps = AntdAutoCompleteProps;

export const AutoComplete = (props: AutoCompleteProps) => {
  return <AntdAutoComplete {...props} />;
};
