import React from 'react';

import clsx from 'clsx';

import { Section } from '..';
import { FlexBox } from '../../Box/Flex';
import { SplitSectionProps } from './types';

export const SplitSection = ({
  children,
  className,
  container,
  isResponsive,
  isReversed,
  left,
  leftProps,
  right,
  rightProps,
  split,
  ...rest
}: SplitSectionProps) => (
  <Section
    className={className}
    container={{
      ...container,
      className: clsx(
        isResponsive
          ? 'flex flex-col flex-nowrap md:flex-row md:flex-wrap items-start'
          : 'flex flex-row flex-wrap items-center',
        'content-between justify-between',
        container?.className
      ),
    }}
    {...rest}
  >
    {isReversed
      ? right && (
          <FlexBox {...split} {...rightProps}>
            {right}
          </FlexBox>
        )
      : left && (
          <FlexBox {...split} {...leftProps}>
            {left}
          </FlexBox>
        )}
    {children}
    {isReversed
      ? left && (
          <FlexBox {...split} {...leftProps}>
            {left}
          </FlexBox>
        )
      : right && (
          <FlexBox {...split} {...rightProps}>
            {right}
          </FlexBox>
        )}
  </Section>
);
