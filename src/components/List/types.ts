import { ReactNode } from 'react';

import { TextProps, TextPattern } from '../Text/types';
import { ListItemProps } from './Item/types';

export type ListPattern = 'default' | 'inline';

export interface ListProps<E extends HTMLElement = HTMLUListElement>
  extends Omit<TextProps<E>, 'is'> {
  footer?: Element | ReactNode;
  header?: Element | ReactNode;
  items?: ListItemProps[];
  is?: ListPattern;
  text?: TextPattern;
}
