export type SEOImage = {
  alt: string;
  height?: number;
  type?: string;
  url: string;
  width?: number;
};

export type SEOProps = {
  canonical?: string;
  description?: string;
  images?: SEOImage[];
  title?: string;
};
