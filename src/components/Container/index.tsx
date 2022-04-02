import React from 'react';

import clsx from 'clsx';

import { Box } from '../Box';
import { ContainerProps } from './types';

export const Container = <E extends HTMLElement = HTMLDivElement>({
  as = 'figure',
  children,
  className,
  is = 'default',
  ...rest
}: ContainerProps<E>) => (
  <Box
    as={as}
    {...rest}
    className={clsx(
      is === 'fluid' ? 'flex-1 w-full mx-auto p-0' : 'container',
      is === 'card' && 'max-w-screen-xs',
      is === 'content' && 'max-w-screen-lg',
      is === 'default' && 'max-w-screen-xl',
      is === 'panel' && 'max-w-screen-sm',
      is === 'wide' && 'max-w-screen-2xl',
      className
    )}
  >
    {children}
  </Box>
);
