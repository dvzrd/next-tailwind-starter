import { BoxProps } from '../Box/types';

export type WrapperPattern = 'col' | 'col-reverse' | 'row' | 'row-reverse';

export type WrapperWrap = 'nowrap' | 'reverse' | 'wrap';

export interface WrapperProps<E extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<E>, 'wrap'> {
  is?: WrapperPattern;
  wrap?: WrapperWrap;
}
