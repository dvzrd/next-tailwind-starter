export interface StaticParams {
  params: { slug: string };
}

export interface StaticProps {
  frontmatter: any;
  source: any;
}

export interface StaticPaths {
  fallback: boolean;
  paths: StaticParams[];
}
