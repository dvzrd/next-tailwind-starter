import React from 'react';

import clsx from 'clsx';

import { Box } from '..';
import { FlexBoxProps } from './types';

export const FlexBox = ({
  children,
  className,
  is = 'default',
  ...rest
}: FlexBoxProps) => (
  <Box
    {...rest}
    className={clsx(
      'flex',
      is === 'default' && 'flex-1',
      is === 'full' && 'flex-full',
      className
    )}
  >
    {children}
  </Box>
);
