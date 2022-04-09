import React from 'react';

import clsx from 'clsx';
import { animated, useSpring } from 'react-spring';

import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Section } from '../../components/Section';
import { SEO } from '../../components/SEO';
import { useTheme } from '../../contexts/Theme';
import { PanelLayoutProps } from './types';

export const PanelLayout = ({
  children,
  className,
  container,
  footer,
  footerProps,
  header,
  headerProps,
  mainProps,
  panelProps,
  seo,
  showFooter = true,
  showHeader = true,
  themeSwitch,
  ...rest
}: PanelLayoutProps) => {
  const { theme } = useTheme();

  return (
    <>
      <SEO {...seo} />
      <Section
        as="div"
        is="layout"
        color="secondary"
        {...rest}
        container={{
          as: animated.div,
          style: useSpring({
            from: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
            to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          }),
          ...container,
          className: clsx(
            'min-h-screen md:min-h-auto',
            'flex flex-col flex-nowrap',
            'p-0 sm:p-0 xs:p-0',
            'md:items-end',
            container?.className
          ),
        }}
        className={clsx(
          'min-h-screen justify-center',
          'items-start md:items-center lg:items-start',
          theme,
          className
        )}
      >
        <Container
          is="panel"
          color="primary"
          {...panelProps}
          className={clsx(
            'md:shadow-md flex flex-col flex-nowrap',
            'min-h-screen md:min-h-auto',
            'max-w-none md:max-w-screen-sm',
            'md:my-6 md:mx-4 lg:mx-6 xl:m-8',
            'p-0 sm:p-0 xs:p-0 xl:py-2',
            panelProps?.className
          )}
        >
          {showHeader && (
            <Header
              color="primary"
              mod="compact transparent"
              showMenu={false}
              {...headerProps}
              className={clsx('relative', headerProps?.className)}
            >
              {header}
            </Header>
          )}
          <Main {...mainProps}>{children}</Main>
          {showFooter && (
            <Footer
              color="primary"
              mod="compact transparent"
              themeSwitch={themeSwitch}
              {...footerProps}
              className={clsx(
                'relative mt-8 md:mt-12 xl:mt-16',
                footerProps?.className
              )}
            >
              {footer}
            </Footer>
          )}
        </Container>
      </Section>
    </>
  );
};
