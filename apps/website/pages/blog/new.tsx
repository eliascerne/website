import { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { EditorUi } from '@eliascerne/editor/ui';
import dynamic from 'next/dynamic';

const EditorJsWithNoSSR = dynamic(
  () => import('@eliascerne/editor/ui') as any,
  {
    ssr: false,
  }
);

/* eslint-disable-next-line */
export interface IndexTsxProps {}

export function BlogNew(props: IndexTsxProps) {
  return (
    <div className="relative py-16 bg-slate-800 overflow-hidden">
      <EditorUi/>
    </div>
  );
}

BlogNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogNew;
