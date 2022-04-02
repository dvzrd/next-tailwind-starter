import { ReactNode } from 'react';

import { FooterProps } from '../../components/Footer/types';
import { HeaderProps } from '../../components/Header/types';
import { PageHeelProps } from '../../components/Heel/Page/types';
import { PageHeroProps } from '../../components/Hero/Page/types';
import { MainProps } from '../../components/Main/types';
import { SEOProps } from '../../components/SEO/types';
import { WrapperPattern, WrapperProps } from '../../components/Wrapper/types';

export type PageLayoutPattern = 'content' | 'default';

export interface PageLayoutProps extends Omit<WrapperProps, 'is'> {
  className?: string;
  footer?: Element | ReactNode;
  footerProps?: FooterProps;
  header?: Element | ReactNode;
  headerProps?: HeaderProps;
  heel?: Element | ReactNode;
  heelProps?: PageHeelProps;
  hero?: Element | ReactNode;
  heroProps?: PageHeroProps;
  is?: PageLayoutPattern;
  mainProps?: MainProps;
  seo?: SEOProps;
  showFooter?: boolean;
  showHeader?: boolean;
  showHeel?: boolean;
  showHero?: boolean;
  wrapper?: WrapperPattern;
}
