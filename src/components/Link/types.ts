import { LinkProps } from 'next/link';

import { TextColor, TextPattern, TextProps } from '../Text/types';

export type LinkPattern = 'blended' | 'accented';

export type LinkColor = TextColor;

export interface NextLinkProps<E extends HTMLSpanElement = HTMLAnchorElement>
  extends Omit<TextProps<E>, 'color' | 'ref'> {
  activeClassName?: string;
  color?: LinkColor;
  href: string;
  is?: LinkPattern;
  isDisabled?: boolean;
  linkProps?: Omit<LinkProps, 'href'>;
  text?: TextPattern;
}
