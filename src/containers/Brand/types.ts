import { ReactNode } from 'react';

import { ImageProps } from 'next/image';

import { TextPattern, TextProps, TextSize } from '../../components/Text/types';

export interface BrandProps extends Omit<TextProps, 'is' | 'name' | 'size'> {
  href?: string;
  logo?: Element | ReactNode;
  logoProps?: ImageProps;
  multiplier?: number;
  name?: Element | ReactNode | string;
  showLink?: boolean;
  showLogo?: boolean;
  showName?: boolean;
  size?: TextSize;
  text?: TextPattern;
}
