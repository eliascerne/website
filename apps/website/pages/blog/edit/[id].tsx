import { ReactElement, useState } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { useRouter } from 'next/router';
import { EditorUi } from '@eliascerne/editor/ui';

/* eslint-disable-next-line */
export interface IndexTsxProps {}

async function getPostParams(id: any) {
  const res = await fetch(`/api/blog/edit/${id}`, {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

export function BlogEdit(props: IndexTsxProps) {
  const [initText, setInitText] = useState();
  const [text, setText] = useState();
  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;

  const handler = async () => {
    if (isReady) {
      const result = await getPostParams(id);
      setInitText(result.text);
    };
  };
  handler();
  () => console.log(initText)
  return (
    <div className="flex flex-col h-screen md:flex-col-reverse gap-4 pt-20 md:pt-5">
      <div className="relative py-8 px-3 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <form>
          <div className="mb-6 md:pl-[4rem] px-0">
            <input
              type="heading"
              id="heading"
              className="bg-slate-800 text-gray-900 text-xl font-bold rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Heading"
              required
              // ref={heading}
              // value={initialRes.post.heading}
            />
            <input
              type="description"
              id="description"
              className="bg-slate-800 text-gray-900 text-lg font-semibold rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Description"
              required
              // ref={description}
              // value={initialRes.post.description}
            />
          </div>
        </form>
        <EditorUi text={text} setText={setText} initialRes={initText} />
      </div>
      <div className="relative py-8 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <button
          className="p-2 px-4 ml-5 bg-cardBorderHover rounded-xl"
          // onClick={createPost}
        >
          <p className="">Save</p>
        </button>
      </div>
    </div>
  );
}

BlogEdit.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogEdit;
