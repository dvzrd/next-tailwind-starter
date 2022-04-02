import React from 'react';

import clsx from 'clsx';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageHeel } from '../../components/Heel/Page';
import { PageHero } from '../../components/Hero/Page';
import { Main } from '../../components/Main';
import { SEO } from '../../components/SEO';
import { Wrapper } from '../../components/Wrapper';
import { useTheme } from '../../contexts/Theme';
import { PageLayoutProps } from './types';

export const PageLayout = ({
  children,
  className,
  footer,
  footerProps,
  header,
  headerProps,
  heel,
  heelProps,
  hero,
  heroProps,
  is = 'default',
  mainProps,
  seo,
  wrapper,
  showFooter = true,
  showHeader = true,
  showHeel = !!(heel || heelProps),
  showHero = !!(hero || heroProps),
  ...rest
}: PageLayoutProps) => {
  const { theme } = useTheme();

  return (
    <>
      <SEO {...seo} />
      <Wrapper
        as="div"
        {...rest}
        is={wrapper}
        className={clsx('min-h-screen antialiased', theme, className)}
      >
        {showHeader && <Header {...headerProps}>{header}</Header>}
        {children && (
          <Main
            {...mainProps}
            is={is === 'content' ? is : mainProps?.is}
            header={showHero && (hero || <PageHero {...heroProps} />)}
            footer={showHeel && (heel || <PageHeel {...heelProps} />)}
          >
            {children}
          </Main>
        )}
        {showFooter && <Footer {...footerProps}>{footer}</Footer>}
      </Wrapper>
    </>
  );
};
