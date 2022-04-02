import React from 'react';

import clsx from 'clsx';

import { Caption } from '../Caption';
import { Container } from '../Container';
import { Wrapper } from '../Wrapper';
import { SectionProps } from './types';

export const Section = ({
  caption,
  children,
  className,
  color = 'default',
  container,
  content,
  footer,
  header,
  is = 'content',
  isContained = true,
  mod,
  vh,
  ...rest
}: SectionProps) => (
  <Wrapper
    color={color}
    {...rest}
    className={clsx(
      'flex content-start items-stretch justify-start',
      is === 'content' && 'flex-1 py-20 md:py-22 xl:py-24',
      is === 'cta' && 'content-center justify-center',
      is === 'feature' &&
        'content-center items-center justify-center py-24 md:py-26 xl:py-28',
      is === 'heel' && 'content-end items-end py-14 md:py-16 xl:py-18',
      is === 'hero' && 'content-center items-center justify-center z-10',
      is === 'layout' && 'content-center items-center justify-center p-0 m-0',
      is === 'main' && 'flex-1 my-0 p-0',
      is === 'topbar' &&
        'flex-none content-center items-start py-4 md:py-5 xl:py-6 z-40',
      mod?.includes('col') && 'flex-col flex-nowrap',
      mod?.includes('compact') && 'my-0 p-0',
      mod?.includes('fluid') &&
        'xs:relative xs:inset-x-1/2 xs:w-screen -mx-4 xs:-mx-vw-1/2',
      mod?.includes('full') && 'flex-full mx-auto max-w-none',
      mod?.includes('inherit') && 'bg-inherit text-inherit',
      mod?.includes('row') && 'flex-row flex-wrap',
      mod?.includes('transparent') && 'bg-transparent border-transparent',
      vh === 'auto' && 'min-h-auto',
      vh === 'full' && 'min-h-screen',
      vh === '11/12' && 'min-h-11/12',
      vh === '5/6' && 'min-h-screen-5/6',
      vh === '4/5' && 'min-h-screen-4/5',
      vh === '3/4' && 'min-h-screen-3/4',
      vh === '2/3' && 'min-h-screen-2/3',
      vh === '3/5' && 'min-h-screen-3/5',
      vh === '1/2' && 'min-h-screen-1/2',
      vh === '2/5' && 'min-h-screen-2/5',
      vh === '1/3' && 'min-h-screen-1/3',
      vh === '1/4' && 'min-h-screen-1/4',
      vh === '1/5' && 'min-h-screen-1/5',
      vh === '1/6' && 'min-h-screen-1/6',
      vh === '1/12' && 'min-h-screen-1/12',
      vh === 'zero' && 'min-h-0',
      className
    )}
  >
    {header}
    {isContained ? (
      <Container {...container} className={clsx('z-10', container?.className)}>
        {caption && <Caption {...caption} />}
        {content}
        {children}
      </Container>
    ) : (
      <>
        {caption && <Caption {...caption} />}
        {content}
        {children}
      </>
    )}
    {footer}
  </Wrapper>
);
