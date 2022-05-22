import { createReactEditorJS } from 'react-editor-js';
import { EditorConfig } from '@eliascerne/editor/ui';
import dynamic from 'next/dynamic';
import { useRef, useCallback } from 'react';

import styles from './EditorUi.module.css';

const EditorJs = dynamic(() => import('react-editor-js') as any, {
  ssr: false,
});

/* eslint-disable-next-line */
export interface EditorUiProps {
  text: any;
  setText: any;
}

const ReactEditorJS = createReactEditorJS();

export function EditorUi(props: EditorUiProps) {
  let { text, setText } = props;
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
    <div className="text-white">
      <ReactEditorJS
        holder="editor"
        // tools={EditorConfig}
        onInitialize={handleInitialize}
        onChange={handleSave}
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
