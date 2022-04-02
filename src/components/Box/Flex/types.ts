import { BoxProps } from '../types';

export type FlexBoxPattern = 'default' | 'full';

export interface FlexBoxProps extends BoxProps {
  is?: FlexBoxPattern;
}
