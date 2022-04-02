import React from 'react';

import clsx from 'clsx';

import { Section } from '../Section';
import { MainProps } from './types';

export const Main = ({
  children,
  className,
  container,
  is = 'default',
  isContained = is === 'content',
  section = 'main',
  ...rest
}: MainProps) => (
  <Section
    as="main"
    is={section}
    isContained={isContained}
    {...rest}
    className={clsx('flex-1', className)}
    container={{
      ...container,
      as: is === 'content' ? 'article' : container?.as || 'div',
      is: is === 'content' ? 'content' : container?.is,
      className: clsx(
        is === 'content' && 'py-12 md:py-16 xl:py-20',
        container?.className
      ),
    }}
  >
    {children}
  </Section>
);
