import { SEOImage } from '../../components/SEO/types';
import { PageLayoutPattern, PageLayoutProps } from '../../layouts/Page/types';

export interface PageTemplateProps extends Omit<PageLayoutProps, 'is'> {
  description?: string;
  heading?: string;
  images?: SEOImage[];
  layout?: PageLayoutPattern;
  subheading?: string;
  title?: string;
}
