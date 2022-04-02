import fs from 'fs';
import path from 'path';

import React from 'react';

import matter from 'gray-matter';

import { NextLink as Link } from '../../components/Link';
import { Section } from '../../components/Section';
import { PageTemplate } from '../../templates/Page';
import { postFilePaths, POSTS_PATH } from '../../utils/mdx';

interface BlogProps {
  posts: any;
}

const Blog = ({ posts }: BlogProps) => (
  <PageTemplate
    title="Blog"
    description="This is the blog page"
    heading="This is the blog page"
    subheading="This is an optional subheading in case you need to say more stuff about the blog page."
  >
    {posts && (
      <Section>
        {posts.map((post: any) => (
          <Link
            key={post.filePath}
            className="my-4 md:my-5 xl:my-6"
            href={`/blog/[slug]`}
            linkProps={{ as: `/blog/${post.filePath.replace(/\.mdx?$/, '')}` }}
            text="subtitle"
          >
            {post.data.title}
          </Link>
        ))}
      </Section>
    )}
  </PageTemplate>
);

export const getStaticProps = () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
};

export default Blog;
