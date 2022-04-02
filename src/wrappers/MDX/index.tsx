import React from 'react';

import { MDXRemote } from 'next-mdx-remote';

import { Box } from '../../components/Box';
import { FlexBox } from '../../components/Box/Flex';
import { GridBox } from '../../components/Box/Grid';
import { Button } from '../../components/Button';
import { Caption } from '../../components/Caption';
import { Container } from '../../components/Container';
import { Heel } from '../../components/Heel';
import { PageHeel } from '../../components/Heel/Page';
import { Hero } from '../../components/Hero';
import { PageHero } from '../../components/Hero/Page';
import { NextLink as Link } from '../../components/Link';
import { ButtonLink } from '../../components/Link/Button';
import { List } from '../../components/List';
import { ListItem } from '../../components/List/Item';
import { ListProps } from '../../components/List/types';
import { Nav } from '../../components/Nav';
import { Section } from '../../components/Section';
import { SplitSection } from '../../components/Section/Split';
import { Switch } from '../../components/Switch';
import { Text } from '../../components/Text';
import { TextProps } from '../../components/Text/types';
import { Wrapper } from '../../components/Wrapper';
import { Brand } from '../../containers/Brand';
import { MDXProps } from './types';

const defaultComponents = {
  a: Link,
  button: Button,
  h1: (props: TextProps) => (
    <Text
      as="h1"
      className="mb-4 mt-8 md:mb-6 md:mt-10 xl:mb-8 xl:mt-12"
      is="hero"
      {...props}
    />
  ),
  h2: (props: TextProps) => (
    <Text
      as="h2"
      className="mb-4 mt-6 md:mb-6 md:mt-8 xl:mb-8 xl:mt-10"
      is="heading"
      {...props}
    />
  ),
  h3: (props: TextProps) => (
    <Text as="h3" className="my-4 md:my-6 xl:my-8" is="title" {...props} />
  ),
  h4: (props: TextProps) => (
    <Text as="h4" className="my-4 md:my-6 xl:my-8" is="subheading" {...props} />
  ),
  h5: (props: TextProps) => (
    <Text as="h5" className="my-4 md:my-6 xl:my-8" is="subtitle" {...props} />
  ),
  h6: (props: TextProps) => (
    <Text
      as="h6"
      className="my-4 md:my-6 xl:my-8 font-semibold"
      is="body"
      {...props}
    />
  ),
  li: ListItem,
  ol: (props: ListProps) => (
    <List as="ol" className="mb-4 md:mb-6 xl:mb-8 pl-5" {...props} />
  ),
  p: (props: TextProps) => (
    <Text as="p" className="mb-4 md:mb-6 xl:mb-8" {...props} />
  ),
  ul: (props: ListProps) => (
    <List className="mb-4 md:mb-6 xl:mb-8 pl-5" {...props} />
  ),
  // components
  Box,
  FlexBox,
  GridBox,
  Button,
  Caption,
  Container,
  Heel,
  PageHeel,
  Hero,
  PageHero,
  Link,
  ButtonLink,
  List,
  ListItem,
  Nav,
  Section,
  SplitSection,
  Switch,
  Text,
  Wrapper,
  // containers
  Brand,
};

export const MDX = ({ components, lazy, source }: MDXProps) => (
  <MDXRemote
    {...source}
    components={{ ...defaultComponents, ...components }}
    lazy={lazy}
  />
);
