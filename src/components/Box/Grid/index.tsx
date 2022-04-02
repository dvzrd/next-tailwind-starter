import React from 'react';

import clsx from 'clsx';

import { Box } from '..';
import { BoxProps } from '../types';

export const GridBox = ({ children, className, ...rest }: BoxProps) => (
  <Box {...rest} className={clsx('grid', className)}>
    {children}
  </Box>
);
