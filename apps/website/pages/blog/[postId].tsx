import { ReactElement } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { LayoutBase } from '@eliascerne/layout/base';
import Output from 'editorjs-react-renderer';
import IDhandler from '../../helpers/postById';
import handler from '../../helpers/allPosts';
import { createReactEditorJS } from 'react-editor-js';

/* eslint-disable-next-line */
export interface IndexTsxProps {
  data: any;
  error: any;
  postHeading?: any;
  postDesc?: any;
  postText: any;
}

const ReactEditorJS = createReactEditorJS();

export function BlogId(props: IndexTsxProps) {
  const { data, error, postHeading, postText, postDesc } = props;

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="border-4 border-cardBorder rounded-3xl p-3 h-screen mt-6 overflow-hidden text-white max-w-2xl">
        <div className="flex flex-col text-center gap-9 mt-4 justify-center">
          <h1 className="font-bold text-2xl">{postHeading}</h1>
          <h2 className="">{postDesc}</h2>
        </div>
        <p className="mt-12">
          <ReactEditorJS
            holder="editor"
            readOnly={true}
            // tools={EditorConfig}
            // onInitialize={handleInitialize}
            // onChange={handleSave}
            defaultValue={{
              time: 1635603431943,
              blocks: postText,
            }}
          />
          {/* <Output data={postText} /> */}
        </p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context.params.postId;
  const event = await IDhandler(eventId);
  console.log(event);
  return {
    props: {
      postHeading: event.heading,
      postDesc: event.description,
      postText: event.text,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await handler();
  const paths = res.map((event: any) => ({
    params: { postId: event.slug.toString() },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

BlogId.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default BlogId;
