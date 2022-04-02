import { ReactNode } from 'react';

import { CopyrightProps } from '../../containers/Copyright/types';
import { ThemeSwitchProps } from '../../contexts/Theme/types';
import { BoxColor } from '../Box/types';
import { LinkColor } from '../Link/types';
import { SectionProps } from '../Section/types';

export type FooterPattern = 'dashboard' | 'default' | 'page';

export interface FooterProps extends Omit<SectionProps, 'color' | 'is'> {
  color?: BoxColor | LinkColor;
  copyright?: Element | ReactNode;
  copyrightProps?: CopyrightProps;
  is?: FooterPattern;
  showCopyright?: boolean;
  showThemeSwitch?: boolean;
  themeSwitch?: ThemeSwitchProps;
}
