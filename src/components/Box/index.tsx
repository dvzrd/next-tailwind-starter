import React from 'react';

import clsx from 'clsx';

import { BoxColor, BoxProps } from './types';

export const boxColor = (color: BoxColor): string => {
  switch (color) {
    case 'dark':
      return 'bg-gray-900 text-gray-100';
    case 'light':
      return 'bg-gray-100 text-gray-900';
    case 'primary':
      return 'bg-primary text-primary';
    case 'secondary':
      return 'bg-secondary text-secondary';
    case 'transparent':
      return 'bg-transparent border-transparent';
    case 'default':
    default:
      return 'bg-default text-default';
  }
};

export const Box = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  children,
  className,
  color,
  innerRef,
  position,
  ...rest
}: BoxProps<E>) => {
  const Component: any = as;

  return (
    <Component
      {...rest}
      className={clsx(color && boxColor(color), position, className)}
      ref={innerRef}
    >
      {children}
    </Component>
  );
};
