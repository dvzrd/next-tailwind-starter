import React from 'react';

import clsx from 'clsx';

import { Heel } from '..';
import { PageHeelProps } from './types';

export const PageHeel = ({
  caption,
  children,
  className,
  container,
  is,
  ...rest
}: PageHeelProps) => (
  <Heel
    {...rest}
    caption={{
      ...caption,
      className: clsx('order-1 my-4 md:my-8 xl:my-12', caption?.className),
      headingProps: {
        is: 'heading',
        ...caption?.headingProps,
      },
      subheadingProps: {
        is: 'subheading',
        ...caption?.subheadingProps,
        className: clsx(
          'mt-4 pt-4 font-thin',
          caption?.subheadingProps?.className
        ),
      },
    }}
    container={{
      is: is === 'content' ? 'content' : 'default',
      ...container,
    }}
    className={clsx(
      'min-h-screen-3/4 md:min-h-screen-3/5 xl:min-h-screen-1/2',
      className
    )}
  >
    {children}
  </Heel>
);
