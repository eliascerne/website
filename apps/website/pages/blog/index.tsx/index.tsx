import type { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';

/* eslint-disable-next-line */
export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
    <div>
      <h1>Welcome to IndexTsx!</h1>
    </div>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default Blog;
