import React, { forwardRef } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { InnerRef } from '../../Box/types';
import { Button } from '../../Button';
import { ButtonLinkProps } from './types';

export const ButtonLink = forwardRef(
  (
    { children, className, href, linkProps, ...rest }: ButtonLinkProps,
    ref: InnerRef<HTMLButtonElement>
  ) => (
    <Link {...linkProps} href={href} passHref>
      <a>
        <Button
          innerRef={ref}
          {...rest}
          className={clsx('underline hover:no-underline', className)}
        >
          {children}
        </Button>
      </a>
    </Link>
  )
);

ButtonLink.displayName = 'ButtonLink';
