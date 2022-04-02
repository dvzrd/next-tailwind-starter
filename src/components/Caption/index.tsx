import React from 'react';

import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';

import { Box } from '../Box';
import { NextLink as Link } from '../Link';
import { getTextAlign, Text } from '../Text';
import { CaptionProps } from './types';

export const Caption = ({
  align,
  as,
  children,
  className,
  content,
  footer,
  header,
  heading,
  headingLink,
  headingLinkProps,
  headingProps,
  meta,
  metaLink,
  metaLinkProps,
  metaProps,
  spring,
  subheading,
  subheadingProps,
  ...rest
}: CaptionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box
      as={as || animated.figcaption}
      innerRef={ref}
      style={useSpring({
        from: { opacity: 0 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
        ...spring,
      })}
      {...rest}
      className={clsx(
        'max-w-screen-lg z-10',
        align && getTextAlign(align),
        className
      )}
    >
      {header}
      {meta &&
        (metaLink ? (
          <Link
            as="small"
            text="subheading"
            {...metaLinkProps}
            className={clsx(
              'mb-4 md:mb-5 xl:mb-6 font-normal',
              metaLinkProps?.className
            )}
            href={metaLink}
          >
            {meta}
          </Link>
        ) : (
          <Text
            as="small"
            is="subheading"
            {...metaProps}
            className="mb-4 md:mb-5 xl:mb-6 font-normal"
          >
            {meta}
          </Text>
        ))}
      {heading &&
        (headingLink ? (
          <Link
            as="h2"
            text="title"
            {...headingLinkProps}
            className={clsx(
              'font-bold leading-tight tracking-wide',
              headingLinkProps?.className
            )}
            href={headingLink}
          >
            {heading}
          </Link>
        ) : (
          <Text
            as="h2"
            is="title"
            {...headingProps}
            className={clsx(
              'font-bold leading-tight tracking-wide',
              headingProps?.className
            )}
          >
            {heading}
          </Text>
        ))}
      {subheading && (
        <Text
          as="h3"
          is="subtitle"
          {...subheadingProps}
          className={clsx(
            'mt-2 font-medium tracking-wider',
            subheadingProps?.className
          )}
        >
          {subheading}
        </Text>
      )}
      {content}
      {children}
      {footer}
    </Box>
  );
};
