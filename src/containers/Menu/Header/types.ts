import {
  LinkColor,
  NextLinkProps as LinkProps,
} from '../../../components/Link/types';
import { NavProps } from '../../../components/Nav/types';
import { ThemeSwitchProps } from '../../../contexts/Theme/types';

export type HeaderMenuPattern = 'default' | 'mobile';

export interface HeaderMenuProps extends Omit<NavProps, 'color' | 'is'> {
  color?: LinkColor;
  is?: HeaderMenuPattern;
  link?: LinkProps;
  showNavLinks?: boolean;
  showThemeSwitch?: boolean;
  themeSwitch?: ThemeSwitchProps;
}
