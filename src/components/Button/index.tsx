import React from 'react';

import clsx from 'clsx';

import { Text, getTextSize } from '../Text';
import { TextPattern } from '../Text/types';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = ({
  as = 'button',
  children,
  className,
  color,
  is = 'contained',
  size = 'md',
  text,
  type,
  ...rest
}: ButtonProps) => {
  const textSize: TextPattern = text || getTextSize(size);

  return (
    <Text
      as={as}
      is={textSize}
      type={type}
      {...rest}
      className={clsx(
        styles.defaultButton,
        'transition-colors duration-250 ease-in-out',
        color === 'primary' && styles.primaryButton,
        color === 'secondary' && styles.secondaryButton,
        color === 'inherit' && styles.inheritButton,
        color === 'transparent' && styles.transparentButton,
        is === 'contained' && styles.containedButton,
        is === 'icon' && styles.iconButton,
        is === 'outlined' && styles.outlinedButton,
        is === 'text' && styles.textButton,
        size === 'xs' && 'border py-1 px-2 lg:px-3 font-light text-1/2',
        size === 'sm' &&
          'border py-1 px-3 md:py-2 lg:px-4 font-normal text-3/4',
        size === 'md' && 'border-2 py-2 px-4 md:px-5 xl:py-3 xl:px-6 text-full',
        size === 'lg' && 'border-2 py-3 px-5 md:px-6 xl:py-4 xl:px-7',
        size === 'xl' && 'border-3 py-4 px-6 md:px-7 xl:py-5 xl:px-8',
        size === '2xl' && 'border-3 py-5 px-7 md:px-8 xl:py-6 xl:px-9',
        size === '3xl' && 'border-4 py-6 px-8 md:px-8 xl:py-7 xl:px-12',
        size === '4xl' && 'border-5 py-7 px-9 md:px-8 xl:py-8 xl:px-14',
        size === '5xl' && 'border-6 py-8 px-10 md:px-8 xl:py-9 xl:px-16',
        className
      )}
    >
      {children}
    </Text>
  );
};
