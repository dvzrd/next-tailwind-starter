import React from 'react';

import { PageLayout } from '../../layouts/Page';
import { PageTemplateProps } from './types';

export const PageTemplate = ({
  children,
  footerProps,
  headerProps,
  heading,
  heroProps,
  images,
  layout,
  seo,
  subheading,
  title,
  description,
  ...rest
}: PageTemplateProps) => (
  <PageLayout
    is={layout}
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
    heroProps={{
      ...heroProps,
      caption: {
        heading,
        subheading,
        ...heroProps?.caption,
      },
    }}
    footerProps={{
      is: 'page',
      ...footerProps,
    }}
  >
    {children}
  </PageLayout>
);
