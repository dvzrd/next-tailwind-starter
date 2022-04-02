import React from 'react';

import clsx from 'clsx';
import { CgCopyright } from 'react-icons/cg';

import { NextLink as Link } from '../../components/Link';
import { Text } from '../../components/Text';
import { Wrapper } from '../../components/Wrapper';
import { AppConfig } from '../../config/AppConfig';
import { CopyrightProps } from './types';

export const Copyright = ({
  className,
  link,
  showAuthor = true,
  showCopyright = true,
  showMessage = true,
  showOrg = true,
  text,
  ...rest
}: CopyrightProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper as="div" className={className} {...rest}>
      <Text
        as="p"
        is="caption"
        {...text}
        className={clsx(
          'block xs:flex text-center xs:text-left items-center',
          'gap-0.5 sm:gap-0.75 md:gap-1',
          text?.className
        )}
      >
        {showCopyright && (
          <>
            <CgCopyright className="inline-flex" />
            {`${AppConfig.copyright?.year || currentYear}, `}
          </>
        )}
        {showMessage && AppConfig.copyright?.message}
        {showOrg && AppConfig.organization?.name ? (
          <>
            <Link
              is="blended"
              rel="noopener"
              target="_blank"
              {...link}
              href={
                AppConfig.organization.url ||
                `mailto:${AppConfig.organization.email}`
              }
            >
              {AppConfig.organization.name}.
            </Link>
          </>
        ) : (
          showMessage && '.'
        )}
        {showAuthor && AppConfig.copyright?.authorMessage}
        {showAuthor && AppConfig.author?.name ? (
          <Link
            is="blended"
            rel="noopener"
            target="_blank"
            {...link}
            href={AppConfig.author.url || `mailto:${AppConfig.author.email}`}
          >
            {AppConfig.author.name}.
          </Link>
        ) : (
          showAuthor && '.'
        )}
      </Text>
    </Wrapper>
  );
};
