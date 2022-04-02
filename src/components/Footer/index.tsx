import React from 'react';

import clsx from 'clsx';

import { Copyright } from '../../containers/Copyright';
import { ThemeSwitch } from '../../contexts/Theme';
import { Section } from '../Section';
import { FooterProps } from './types';

export const Footer = ({
  children,
  className,
  color = 'secondary',
  container,
  copyright,
  copyrightProps,
  is,
  showCopyright = true,
  showThemeSwitch = true,
  themeSwitch,
  ...rest
}: FooterProps) => (
  <Section
    as="footer"
    is="topbar"
    {...rest}
    className={clsx(
      'text-sm items-end text-center sm:text-left',
      is === 'page' && 'pt-12 md:pt-14 xl:pt-16',
      className
    )}
    color={color}
    container={{
      ...container,
      className: clsx(
        'flex flex-row flex-wrap',
        'content-between items-end justify-between',
        container?.className
      ),
    }}
  >
    {showCopyright && (copyright || <Copyright {...copyrightProps} />)}
    {children}
    {showThemeSwitch && (
      <ThemeSwitch
        color={color}
        {...themeSwitch}
        className={clsx('mt-4', themeSwitch?.className)}
      />
    )}
  </Section>
);
