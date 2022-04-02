import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { NextLink as Link } from '../../components/Link';
import { NextLinkProps as LinkProps } from '../../components/Link/types';
import { Text } from '../../components/Text';
import { TextSize } from '../../components/Text/types';
import { AppConfig } from '../../config/AppConfig';
import { useTheme } from '../../contexts/Theme';
import styles from './Brand.module.scss';
import { BrandProps } from './types';

export const getLogoSize = (size: TextSize) => {
  switch (size) {
    case 'xs':
      return 16;
    case 'md':
      return 64;
    case 'lg':
      return 128;
    case 'xl':
      return 256;
    case '2xl':
      return 512;
    case '3xl':
      return 1024;
    case 'sm':
    default:
      return 32;
  }
};

export const Brand = ({
  as,
  children,
  className,
  color,
  href = '/',
  logo,
  logoProps,
  multiplier = 2,
  name,
  showLink = true,
  showLogo = true,
  showName = true,
  size = 'sm',
  text = 'meta',
  ...rest
}: BrandProps) => {
  const router = useRouter();
  const { theme } = useTheme();

  const renderLogo = () =>
    showLogo &&
    (logo || (
      <span
        className="relative flex"
        style={
          theme === 'dark' ? { filter: 'invert(1)' } : { filter: 'invert(0)' }
        }
      >
        <Image
          alt={`${name || AppConfig.site_name} Logo`}
          layout="fixed"
          src={`${router.basePath}/assets/images/logo.png`}
          {...logoProps}
          width={size && getLogoSize(size) * multiplier}
          height={size && getLogoSize(size)}
        />
      </span>
    ));

  const renderName = () => showName && (name || AppConfig.site_name);

  return (
    <>
      {showLink ? (
        <Link
          as={as}
          {...(rest as LinkProps)}
          color={color}
          href={href}
          text={text}
          className={clsx(styles.brand, className)}
        >
          {renderLogo()}
          {renderName()}
          {children}
        </Link>
      ) : (
        <Text
          as={as}
          is={text}
          color={color}
          {...rest}
          className={clsx(styles.brand, className)}
        >
          {renderLogo()}
          {renderName()}
          {children}
        </Text>
      )}
    </>
  );
};
