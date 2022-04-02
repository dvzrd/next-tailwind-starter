import { BoxColor } from '../Box/types';
import { SectionProps } from '../Section/types';
import { TextProps } from '../Text/types';

export interface HeelProps extends Omit<SectionProps, 'color' | 'form'> {
  color?: BoxColor;
  heading?: string;
  headingProps?: TextProps;
  subheading?: string;
  subheadingProps?: TextProps;
}
