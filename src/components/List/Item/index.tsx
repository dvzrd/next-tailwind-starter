import clsx from 'clsx';

import { Text } from '../../Text';
import { TextProps } from '../../Text/types';
import { ListItemProps } from './types';

export const ListItem = <E extends HTMLElement = HTMLLIElement>({
  as = 'li',
  children,
  className,
  text,
  ...rest
}: ListItemProps<E>) => (
  <Text
    as={as}
    is={text}
    {...(rest as TextProps)}
    className={clsx('m-0', className)}
  >
    {children}
  </Text>
);
