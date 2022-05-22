import { ReactElement, useRef } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { EditorUi } from '@eliascerne/editor/ui';
import { NextApiResponse } from 'next';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const EditorJsWithNoSSR = dynamic(
  () => import('@eliascerne/editor/ui') as any,
  {
    ssr: false,
  }
);

/* eslint-disable-next-line */
export interface IndexTsxProps {}

async function createPostHandler(heading: any, description: any) {
  let response = {};
  const res: any = await fetch('/api/blog/new', {
    method: 'POST',
    body: JSON.stringify({ heading, description }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      response = data;
    })
    .catch((e) => {
      console.log(e);
      toast.error('Error in creating Post occured', {
        style: {
          borderRadius: '10px',
          borderWidth: '2px',
          borderColor: '#333b49',
          background: '#111725',
          color: '#fff',
        },
      });
    });
  return response;
}

export function BlogNew(props: IndexTsxProps) {
  const heading = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  const router = useRouter();

  async function createPost() {
    if (!heading.current.value) {
      toast.error('Heading missing', {
        style: {
          borderRadius: '10px',
          borderWidth: '2px',
          borderColor: '#333b49',
          background: '#111725',
          color: '#fff',
        },
      });
      return;
    }

    const res = await createPostHandler(
      heading.current.value,
      description.current.value
    ).then((data: any) => router.push(`/blog/edit/${data._id}`));
  }

  return (
    <div className="flex flex-col md:flex-col-reverse gap-4 pt-20 md:pt-5">
      <div className="relative py-8 px-3 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <form>
          <div className="mb-6 md:pl-[4rem] px-0">
            <input
              type="heading"
              id="heading"
              className="bg-slate-800 text-gray-900 text-xl font-bold rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Heading"
              required
              ref={heading}
            />
            <input
              type="description"
              id="description"
              className="bg-slate-800 text-gray-900 text-lg font-semibold rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Description"
              required
              ref={description}
            />
          </div>
        </form>
        {/* <EditorUi /> */}
      </div>
      <div className="relative py-8 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <button
          className="p-2 ml-5 bg-cardBorderHover rounded-xl"
          onClick={createPost}
        >
          <p className="">Create</p>
        </button>
      </div>
    </div>
  );
}

BlogNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogNew;
