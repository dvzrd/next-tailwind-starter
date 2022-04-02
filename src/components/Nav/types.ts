import { ListPattern, ListProps } from '../List/types';

export type NavPattern = 'default' | 'metro' | 'menu';

export interface NavProps extends Omit<ListProps, 'is'> {
  is?: NavPattern;
  list?: ListPattern;
}
