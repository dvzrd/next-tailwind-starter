import { ReactNode } from 'react';

import { ContainerProps } from '../../components/Container/types';
import { FooterProps } from '../../components/Footer/types';
import { HeaderProps } from '../../components/Header/types';
import { MainProps } from '../../components/Main/types';
import { SectionProps } from '../../components/Section/types';
import { SEOProps } from '../../components/SEO/types';
import { BrandProps } from '../../containers/Brand/types';
import { ThemeSwitchProps } from '../../contexts/Theme/types';

export interface PanelLayoutProps
  extends Omit<SectionProps, 'footer' | 'header' | 'is'> {
  brand?: BrandProps;
  footer?: Element | ReactNode;
  footerProps?: FooterProps;
  header?: Element | ReactNode;
  headerProps?: HeaderProps;
  mainProps?: MainProps;
  panelProps?: ContainerProps;
  seo?: SEOProps;
  showFooter?: boolean;
  showHeader?: boolean;
  themeSwitch?: ThemeSwitchProps;
}
