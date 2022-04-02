import React from 'react';

import clsx from 'clsx';

import { boxColor } from '../../../components/Box';
import { NextLink as Link } from '../../../components/Link';
import { Nav } from '../../../components/Nav';
import { ThemeSwitch } from '../../../contexts/Theme';
import { HeaderMenuProps } from './types';

export const HeaderMenu = ({
  children,
  className,
  color,
  is,
  link,
  showNavLinks = true,
  showThemeSwitch = false,
  themeSwitch,
  ...rest
}: HeaderMenuProps) => (
  <Nav
    {...rest}
    is={is === 'mobile' ? 'menu' : 'default'}
    color={color}
    className={clsx(
      is === 'mobile' &&
        'fixed top-0 left-0 w-screen h-screen items-center justify-center content-center',
      is === 'mobile' && color && boxColor(color),
      className
    )}
  >
    {showNavLinks && (
      <>
        <Link
          is="blended"
          size={is === 'mobile' ? '3xl' : 'inherit'}
          {...link}
          color={color}
          href="/about"
        >
          About
        </Link>
        <Link
          is="blended"
          size={is === 'mobile' ? '3xl' : 'inherit'}
          {...link}
          color={color}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          is="blended"
          size={is === 'mobile' ? '3xl' : 'inherit'}
          {...link}
          color={color}
          href="/contact"
        >
          Contact
        </Link>
      </>
    )}
    {children}
    {showThemeSwitch && <ThemeSwitch color={color} {...themeSwitch} />}
  </Nav>
);
