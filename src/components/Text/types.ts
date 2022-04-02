import { BoxColor, BoxProps } from '../Box/types';

export type TextAlign = 'center' | 'justify' | 'left' | 'right';

export type TextColor = BoxColor;

export type TextPattern =
  | 'body'
  | 'caption'
  | 'heading'
  | 'hero'
  | 'legend'
  | 'meta'
  | 'subheading'
  | 'subtitle'
  | 'title'
  | string;

export type TextSize =
  | 'inherit'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export interface TextProps<E extends HTMLElement = HTMLSpanElement>
  extends Omit<BoxProps<E>, 'color' | 'size' | 'to'> {
  align?: TextAlign;
  color?: TextColor;
  is?: TextPattern;
  size?: TextSize;
  to?: string;
}
