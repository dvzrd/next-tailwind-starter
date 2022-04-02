import React from 'react';

import clsx from 'clsx';

import { Box } from '../Box';
import {
  TextAlign,
  TextColor,
  TextPattern,
  TextProps,
  TextSize,
} from './types';

export const getTextAlign = (align: TextAlign) => {
  switch (align) {
    case 'center':
      return 'mx-auto text-center';
    case 'justify':
      return 'mx-auto text-justify';
    case 'right':
      return 'ml-auto mr-0 text-right';
    case 'left':
    default:
      return 'ml-0 mr-auto text-left';
  }
};

export const getTextColor = (color: TextColor) => {
  switch (color) {
    case 'dark':
      return 'text-contrast';
    case 'light':
      return 'text-action';
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'inherit':
    default:
      return 'text-inherit';
  }
};

export const getTextSize = (size: TextSize) => {
  switch (size) {
    case 'inherit':
      return 'text-inherit';
    case 'xs':
      return 'text-xs md:text-sm xl:text-base';
    case 'sm':
      return 'text-sm md:text-base xl:text-lg';
    case 'lg':
      return 'text-lg md:text-xl xl:text-2xl';
    case 'xl':
      return 'text-xl md:text-2xl xl:text-3xl';
    case '2xl':
      return 'text-2xl md:text-3xl xl:text-4xl';
    case '3xl':
      return 'text-3xl md:text-4xl xl:text-5xl';
    case '4xl':
      return 'text-4xl md:text-5xl xl:text-6xl';
    case '5xl':
      return 'text-5xl md:text-6xl xl:text-7xl';
    case 'md':
    default:
      return 'text-base md:text-lg xl:text-xl';
  }
};

export const getTextPattern = (pattern: TextPattern, size?: TextSize) => {
  switch (pattern) {
    case 'caption':
      return clsx(
        'font-body tracking-normal',
        size ? getTextSize(size) : getTextSize('xs')
      );
    case 'heading':
      return clsx(
        'block font-heading leading-tight tracking-wide',
        size ? getTextSize(size) : getTextSize('3xl')
      );
    case 'hero':
      return clsx(
        'block font-heading',
        size ? getTextSize(size) : getTextSize('4xl')
      );
    case 'legend':
      return clsx(
        'block font-heading',
        size ? getTextSize(size) : getTextSize('5xl')
      );
    case 'meta':
      return clsx(
        'font-body tracking-wider',
        size ? getTextSize(size) : getTextSize('sm')
      );
    case 'subheading':
      return clsx(
        'block font-heading',
        size ? getTextSize(size) : getTextSize('xl')
      );
    case 'subtitle':
      return clsx(
        'block font-heading',
        size ? getTextSize(size) : getTextSize('lg')
      );
    case 'title':
      return clsx(
        'block font-heading leading-tight md:leading-tight tracking-wide',
        size ? getTextSize(size) : getTextSize('2xl')
      );
    case 'body':
    default:
      return clsx(
        'font-body tracking-normal',
        size ? getTextSize(size) : getTextSize('md')
      );
  }
};

export const Text = <E extends HTMLElement = HTMLSpanElement>({
  align,
  as = 'span',
  children,
  className,
  color,
  is = 'body',
  size,
  ...rest
}: TextProps<E>) => (
  <Box
    as={as}
    {...rest}
    className={clsx(
      'border-none outline-none',
      align && getTextAlign(align),
      color && getTextColor(color),
      is && getTextPattern(is, size),
      size && getTextSize(size),
      className
    )}
  >
    {children}
  </Box>
);
