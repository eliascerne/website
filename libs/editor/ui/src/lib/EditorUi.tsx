import { createReactEditorJS } from 'react-editor-js';
import { EditorConfig } from '@eliascerne/editor/ui';
import dynamic from 'next/dynamic';

import styles from './EditorUi.module.css';

const EditorJs = dynamic(() => import('react-editor-js') as any, {
  ssr: false,
});

/* eslint-disable-next-line */
export interface EditorUiProps {}

const ReactEditorJS = createReactEditorJS();

export function EditorUi(props: EditorUiProps) {
  return (
    <div className="text-white">
      <ReactEditorJS
        holder="editor"
        // tools={EditorConfig}
        defaultValue={{
          time: 1635603431943,
          blocks: [
            {
              id: '12iM3lqzcm',
              type: 'paragraph',
              data: {
                text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default EditorUi;
