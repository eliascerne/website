import { ReactElement, useRef, useState, useCallback } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { createReactEditorJS } from 'react-editor-js';
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

const ReactEditorJS = createReactEditorJS();

async function createPostHandler(heading: any, description: any, text: any, slug: any) {
  let response = {};
  const res: any = await fetch('/api/blog/new', {
    method: 'POST',
    body: JSON.stringify({ heading, description, text, slug }),
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
  const slug = useRef<HTMLInputElement>();
  const [initText, setInitText] = useState<any>([
    {
      id: 'erias',
      type: 'paragraph',
      data: {
        text: 'Hey, baby, wanna touch my weiner? ~ Butthead',
      },
    },
  ]);
  const [text, setText] = useState<any>([
    {
      id: 'erias',
      type: 'paragraph',
      data: {
        text: 'Hey, baby, wanna touch my weiner? ~ Butthead',
      },
    },
  ]);
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
      description.current.value,
      text,
      slug.current.value,
    ).then((data: any) => router.push(`/blog/edit/${data._id}`));
  }

  const editorCore = useRef(null);
  const handleInitialize = useCallback((instance: any) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    let editorData: any;
    editorData = editorCore?.current;
    const editorSaveData = await editorData.save();
    setText(editorSaveData.blocks);
  }, []);

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
        <div className="text-white">
          {initText && (
            <ReactEditorJS
              holder="editor"
              // tools={EditorConfig}
              onInitialize={handleInitialize}
              onChange={handleSave}
              defaultValue={{
                time: 1635603431943,
                blocks: initText,
              }}
            />
          )}
        </div>
      </div>
      <div className="relative py-8 w-full bg-slate-800 overflow-hidden border-4 border-cardBorder rounded-2xl">
        <div className="flex gap-6">
          <button
            className="p-2 px-4 ml-5 bg-cardBorderHover rounded-xl"
            onClick={createPost}
          >
            <p className="">Create</p>
          </button>
          <div className="flex text-white justify-center items-center gap-1">
            <p className="">Slug:</p>
            <input
              type="description"
              id="description"
              className="bg-slate-800 text-gray-900 rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Slug"
              required
              ref={slug}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

BlogNew.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogNew;
