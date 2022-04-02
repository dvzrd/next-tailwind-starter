import { TextProps, TextPattern } from '../../Text/types';

export type ListItemPattern = 'cell' | 'default' | 'wrapper';

export interface ListItemProps<E extends HTMLElement = HTMLLIElement>
  extends Omit<TextProps<E>, 'is'> {
  is?: ListItemPattern;
  text?: TextPattern;
}
