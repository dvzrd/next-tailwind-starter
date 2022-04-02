import React from 'react';

import clsx from 'clsx';

import { Section } from '../Section';
import { HeroProps } from './types';

export const Hero = ({
  as = 'header',
  caption,
  children,
  color,
  className,
  container,
  is = 'default',
  vh,
  ...rest
}: HeroProps) => (
  <Section
    as={as}
    color={color}
    is="hero"
    vh={vh}
    {...rest}
    caption={{
      ...caption,
      headingProps: {
        as: 'h1',
        ...caption?.headingProps,
      },
      subheadingProps: {
        as: 'h2',
        ...caption?.subheadingProps,
      },
    }}
    container={{
      ...container,
      className: clsx('items-start', container?.className),
    }}
    className={clsx(
      is === 'card' && 'max-w-screen-md py-14 md:py-16 xl:py-18',
      is === 'default' && 'py-16 md:py-18 xl:py-20',
      is === 'page' && 'py-18 md:py-20 xl:py-24',
      is === 'panel' && 'py-4 md:py-6 xl:py-8',
      className
    )}
  >
    {children}
  </Section>
);
