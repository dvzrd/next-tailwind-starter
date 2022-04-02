import { TextProps, TextSize, TextPattern } from '../Text/types';

export type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'transparent';

export type ButtonPattern = 'contained' | 'icon' | 'outlined' | 'text';

export type ButtonType = 'button' | 'reset' | 'submit';

export interface ButtonProps<E extends HTMLElement = HTMLButtonElement>
  extends Omit<TextProps<E>, 'color' | 'is' | 'pattern'> {
  color?: ButtonColor;
  is?: ButtonPattern;
  size?: TextSize;
  text?: TextPattern;
  type?: ButtonType;
}
