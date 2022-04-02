import React from 'react';

import { PanelLayout } from '../../layouts/Panel';
import { PanelTemplateProps } from './types';

export const PanelTemplate = ({
  children,
  footerProps,
  headerProps,
  // heading,
  // heroProps,
  images,
  seo,
  // subheading,
  title,
  description,
  ...rest
}: PanelTemplateProps) => (
  <PanelLayout
    {...rest}
    seo={{
      description,
      images,
      title,
      ...seo,
    }}
    headerProps={{
      is: 'page',
      ...headerProps,
    }}
    footerProps={{
      is: 'page',
      ...footerProps,
    }}
  >
    {children}
  </PanelLayout>
);
