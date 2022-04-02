import fs from 'fs';
import path from 'path';

import React from 'react';

import clsx from 'clsx';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { Section } from '../../components/Section';
import { PageTemplate } from '../../templates/Page';
import { StaticParams, StaticPaths, StaticProps } from '../../types';
import { POSTS_PATH, postFilePaths } from '../../utils/mdx';
import { MDX } from '../../wrappers/MDX';

const BlogPost = ({ frontmatter, source }: StaticProps) => (
  <PageTemplate
    title={frontmatter.title}
    description={frontmatter.description}
    heading={frontmatter.heading || frontmatter.title}
    subheading={frontmatter.subheading}
  >
    <Section
      container={{
        className: clsx(
          'flex flex-col col-wrap',
          'content-start items-stretch justify-start'
        ),
      }}
    >
      <MDX source={source} />
    </Section>
  </PageTemplate>
);

export const getStaticProps = async ({
  params,
}: StaticParams): Promise<{ props: StaticProps }> => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      frontmatter: data,
      source: mdxSource,
    },
  };
};

export const getStaticPaths = async (): Promise<StaticPaths> => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    fallback: false,
    paths,
  };
};

export default BlogPost;
