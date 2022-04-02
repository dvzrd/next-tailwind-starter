import React from 'react';

import clsx from 'clsx';
import { random } from 'lodash';

import { Text } from '../Text';
import { TextProps } from '../Text/types';
import { ListItem } from './Item';
import { ListItemProps } from './Item/types';
import { ListProps } from './types';

export const List = <E extends HTMLElement = HTMLUListElement>({
  as = 'ul',
  children,
  className,
  footer,
  header,
  is,
  items = undefined,
  text,
  ...rest
}: ListProps<E>) => (
  <Text
    as={as}
    is={text}
    {...(rest as TextProps)}
    className={clsx(
      'list-square',
      is === 'default' && 'flex flex-col flex-full flex-wrap',
      is === 'inline' && 'flex flex-row flex-wrap',
      className
    )}
  >
    {header}
    {items?.length &&
      items.map((item) => (
        <ListItem key={random(16)} {...(item as ListItemProps)}>
          {item.children}
        </ListItem>
      ))}
    {children}
    {footer}
  </Text>
);
