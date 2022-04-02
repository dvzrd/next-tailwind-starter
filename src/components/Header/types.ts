import { BrandProps } from '../../containers/Brand/types';
import { HeaderMenuProps } from '../../containers/Menu/Header/types';
import { BoxColor } from '../Box/types';
import { LinkColor } from '../Link/types';
import { SplitSectionProps } from '../Section/Split/types';

export type HeaderPattern = 'dashboard' | 'default' | 'page';

export interface HeaderProps extends Omit<SplitSectionProps, 'color' | 'is'> {
  brand?: BrandProps;
  color?: BoxColor | LinkColor;
  is?: HeaderPattern;
  isFixed?: boolean;
  menu?: HeaderMenuProps;
  showBrand?: boolean;
  showMenu?: boolean;
}
