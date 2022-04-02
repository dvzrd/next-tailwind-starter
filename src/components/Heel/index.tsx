import React from 'react';

import clsx from 'clsx';

import { Section } from '../Section';
import { HeelProps } from './types';

export const Heel = ({
  as = 'footer',
  children,
  color,
  className,
  container,
  vh,
  ...rest
}: HeelProps) => (
  <Section
    as={as}
    color={color}
    is="heel"
    vh={vh}
    {...rest}
    container={{
      ...container,
      className: clsx('items-start', container?.className),
    }}
    className={className}
  >
    {children}
  </Section>
);
