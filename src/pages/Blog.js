import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/blog.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Mehdi Teymorian"
  >
    <article className="post markdown" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Blog;
