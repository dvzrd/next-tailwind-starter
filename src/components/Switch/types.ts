import { BoxColor, BoxProps } from '../Box/types';
import { TextSize } from '../Text/types';

export type SwitchPattern = 'default' | 'pill';

export interface SwitchProps extends Omit<BoxProps, 'color' | 'size'> {
  checked?: boolean;
  color?: BoxColor;
  disabled?: boolean;
  is?: SwitchPattern;
  onChange?: (event: any) => void;
  size?: TextSize;
}
