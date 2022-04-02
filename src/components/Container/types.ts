import { BoxProps } from '../Box/types';

export type ContainerPattern =
  | 'card'
  | 'content'
  | 'default'
  | 'fluid'
  | 'panel'
  | 'wide';

export interface ContainerProps<E extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<E>, 'is' | 'width'> {
  is?: ContainerPattern;
}
