import { ReactElement, useRef, useState, useCallback } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { LayoutBase } from '@eliascerne/layout/base';
import { useRouter } from 'next/router';
import { EditorUi } from '@eliascerne/editor/ui';
import toast from 'react-hot-toast';

/* eslint-disable-next-line */
export interface IndexTsxProps {}

const ReactEditorJS = createReactEditorJS();

async function getPostParams(id: any) {
  const res = await fetch(`/api/blog/edit/${id}`, {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

async function updatePostParams(
  id: any,
  heading: any,
  description: any,
  text: any,
  slug: any
) {
  const response = await fetch('/api/blog/edit/update', {
    method: 'POST',
    body: JSON.stringify({ id, heading, description, text, slug }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  if (data) {
    toast.success('Saved Successfully', {
      style: {
        borderRadius: '10px',
        borderWidth: '2px',
        borderColor: '#333b49',
        background: '#111725',
        color: '#fff',
      },
    });
  }
  return data;
}

export function BlogEdit(props: IndexTsxProps) {
  const [initText, setInitText] = useState<any>();
  const [text, setText] = useState<any>();
  const [initRes, setInitRes] = useState();

  const [heading, setHeading] = useState();
  const [description, setDescription] = useState();
  const [slug, setSlug] = useState();

  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;

  const handler = async () => {
    if (isReady && !initText) {
      const result = await getPostParams(id);
      setHeading(result.heading);
      setDescription(result.description);
      setSlug(result.slug);
      setInitText(result.text);
    }
    // setHeading(result.heading);
  };
  handler();

  const updateHandler = async () => {
    console.log(text);
    const result = await updatePostParams(id, heading, description, text, slug);
    console.log(result);
  };

  const handleHeading = (e: any) => {
    setHeading(e.target.value);
  };
  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const handleSlug = (e: any) => {
    setSlug(e.target.value);
  };

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

  // useState(() => {
  //   heading.current.value = heading.current.value ?? initText;
  // });
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
              onChange={handleHeading}
              value={heading}
            />
            <input
              type="description"
              id="description"
              className="bg-slate-800 text-gray-900 text-lg font-semibold rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Description"
              required
              value={description}
              onChange={handleDescription}
            />
          </div>
        </form>
        <div className="text-white">
          {initText && (
            <ReactEditorJS
              holder="editor"
              readOnly={true}
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
            onClick={updateHandler}
          >
            <p className="">Save</p>
          </button>
          <div className="flex text-white justify-center items-center gap-1">
            <p className="">Slug:</p>
            <input
              type="description"
              id="description"
              className="bg-slate-800 text-gray-900 rounded-lg block w-full p-2.5 pl-0 focus:ring-0 dark:bg-slate-800 dark:placeholder-gray-400 dark:text-white"
              placeholder="Slug"
              required
              value={slug}
              onChange={handleSlug}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

BlogEdit.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogEdit;
