import { LinkProps } from 'next/link';

import { ButtonProps } from '../../Button/types';

export interface ButtonLinkProps<E extends HTMLSpanElement = HTMLButtonElement>
  extends Omit<ButtonProps<E>, 'ref'> {
  activeClassName?: string;
  href: string;
  isDisabled?: boolean;
  linkProps?: LinkProps;
}
