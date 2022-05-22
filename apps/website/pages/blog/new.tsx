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
    <div className="flex flex-col md:flex-col-reverse gap-4 pt-20 md:pt-5">
      <div className="relative py-8 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <form>
          <div className="mb-6 pl-[4rem]">
            <input
              type="heading"
              id="heading"
              className="bg-slate-800 text-gray-900 text-xl font-bold rounded-lg block w-full p-2.5 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Heading"
              required
            />
            <input
              type="description"
              id="description"
              className="bg-slate-800 text-gray-900 text-lg font-semibold rounded-lg block w-full p-2.5 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Description"
              required
            />
          </div>
        </form>
        <EditorUi />
      </div>
      <div className="relative py-8 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <button className="p-2 ml-5 bg-cardBorderHover rounded-xl">
          <p className="">Save</p>
        </button>
      </div>
    </div>
  );
}

BlogNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogNew;
