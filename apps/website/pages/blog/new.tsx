import { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { createReactEditorJS } from 'react-editor-js';

/* eslint-disable-next-line */
export interface IndexTsxProps {}

const ReactEditorJS = createReactEditorJS();

export function BlogNew(props: IndexTsxProps) {
  return (
    <div>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
}

BlogNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogNew;
