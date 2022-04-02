import { ReactNode } from 'react';

import { FlexBoxProps } from '../../Box/Flex/types';
import { SectionProps } from '../types';

export interface SplitSectionProps extends SectionProps {
  isResponsive?: boolean;
  isReversed?: boolean;
  left?: Element | ReactNode;
  leftProps?: FlexBoxProps;
  right?: Element | ReactNode;
  rightProps?: FlexBoxProps;
  split?: FlexBoxProps;
}
